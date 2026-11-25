import { useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CabinInterior from '../CabinInterior.webp';
import Ram from './RamHead.webp';
import Bag from './Bag.webp';
import Book from './Book.webp';
import Camera from './Camera.webp';
import { isPointInShape } from './shapeMasks';
import styles from './Home.module.css';

// base source image dimensions and aspect ratio
const IMAGE_WIDTH = 1280;
const IMAGE_HEIGHT = 720;
const IMAGE_RATIO = IMAGE_WIDTH / IMAGE_HEIGHT;

// interactive shapes listed in z-index priority order
const SHAPES = [
  { id: 'ram', name: 'About', src: Ram, path: '/about', className: styles.ram },
  { id: 'bag', name: 'Projects', src: Bag, path: '/projects', className: styles.bag },
  { id: 'book', name: 'Experience', src: Book, path: '/experience', className: styles.book },
  { id: 'camera', name: 'Beyond', src: Camera, path: '/beyond', className: styles.camera },
];

export default function Home() {
  const containerRef = useRef(null);
  const [hoveredShape, setHoveredShape] = useState(null);
  const navigate = useNavigate();

  // convert screen coordinates to exact source image pixels (1280x720)
  const getSourcePixel = useCallback((clientX, clientY) => {
    const container = containerRef.current;
    if (!container) return null;

    // get live container dimensions on screen
    const rect = container.getBoundingClientRect();
    const containerWidth = rect.width;
    const containerHeight = rect.height;
    if (!containerWidth || !containerHeight) return null;

    // check if viewport is in vertical orientation
    const isVertical = containerHeight > containerWidth;

    // determine scene coordinate space (dimensions swap when rotated 90deg)
    const sceneWidth = isVertical ? containerHeight : containerWidth;
    const sceneHeight = isVertical ? containerWidth : containerHeight;

    const sceneRatio = sceneWidth / sceneHeight;
    let scale;
    let offsetX;
    let offsetY;

    // scale and position image preserving aspect ratio (matches CSS object-fit: cover)
    if (sceneRatio > IMAGE_RATIO) {
      // wide scene: scale to fit width
      scale = sceneWidth / IMAGE_WIDTH;
      const renderedHeight = IMAGE_HEIGHT * scale;
      offsetX = 0;
      // in vertical rotated scene, top aligns with right edge of viewport
      offsetY = isVertical ? 0 : (sceneHeight - renderedHeight) / 2;
    } else {
      // tall scene: scale to fit height, anchor to right and cut off from left
      scale = sceneHeight / IMAGE_HEIGHT;
      const renderedWidth = IMAGE_WIDTH * scale;
      offsetX = sceneWidth - renderedWidth;
      offsetY = 0;
    }

    // set coordinates relative to container
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;

    let localX;
    let localY;

    if (isVertical) {
      // inverse transform for 90deg clockwise rotation around container center
      const dx = mouseX - containerWidth / 2;
      const dy = mouseY - containerHeight / 2;
      localX = sceneWidth / 2 + dy;
      localY = sceneHeight / 2 - dx;
    } else {
      localX = mouseX;
      localY = mouseY;
    }

    // map scene coordinates back to original 1280x720 source pixel
    const imgX = Math.floor((localX - offsetX) / scale);
    const imgY = Math.floor((localY - offsetY) / scale);

    // return null if click falls outside source image boundary
    if (imgX < 0 || imgX >= IMAGE_WIDTH || imgY < 0 || imgY >= IMAGE_HEIGHT) {
      return null;
    }

    return { imgX, imgY };
  }, []);

  // check if click or hover hits any interactive shape
  const checkHit = useCallback(
    (clientX, clientY) => {
      const coords = getSourcePixel(clientX, clientY);
      if (!coords) return null;

      // check shapes in z-index order against precomputed organic bitmasks
      for (const shape of SHAPES) {
        if (isPointInShape(shape.id, coords.imgX, coords.imgY)) {
          return shape.id;
        }
      }
      return null;
    },
    [getSourcePixel]
  );

  // update hover state and cursor when mouse moves
  const handleMouseMove = (e) => {
    const hit = checkHit(e.clientX, e.clientY);
    if (hit !== hoveredShape) {
      setHoveredShape(hit);
    }
  };

  // reset hover state when mouse leaves container
  const handleMouseLeave = () => {
    if (hoveredShape !== null) {
      setHoveredShape(null);
    }
  };

  // handle click on interactive shapes
  const handleClick = (e) => {
    const hit = checkHit(e.clientX, e.clientY);
    if (hit) {
      const targetShape = SHAPES.find((s) => s.id === hit);
      if (targetShape) {
        navigate(targetShape.path);
      }
    }
  };

  // handle tap on mobile touch screens
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      const hit = checkHit(touch.clientX, touch.clientY);
      if (hit) {
        setHoveredShape(hit);
        const targetShape = SHAPES.find((s) => s.id === hit);
        if (targetShape) {
          navigate(targetShape.path);
        }
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.pageContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      style={{ cursor: hoveredShape ? 'pointer' : 'default' }}
    >
      {/* rotating scene wrapper for vertical viewports */}
      <div className={styles.sceneContainer}>
        {/* background cabin interior layer */}
        <img
          src={CabinInterior}
          alt="Cabin Interior"
          className={styles.sceneBg}
          draggable={false}
        />

        {/* organic shape layers with white contour glow */}
        {SHAPES.map((shape) => {
          const isHovered = hoveredShape === shape.id;
          return (
            <img
              key={shape.id}
              src={shape.src}
              alt={shape.name}
              className={`${styles.shapeLayer} ${shape.className} ${
                isHovered ? styles.shapeHovered : ''
              }`}
              draggable={false}
            />
          );
        })}
      </div>

      <p className={styles.text}>Click to explore.</p>

      {/* accessible navigation for keyboard and screen-reader users */}
      <div className={styles.srOnly}>
        {SHAPES.map((shape) => (
          <button
            key={shape.id}
            onClick={() => navigate(shape.path)}
            onFocus={() => setHoveredShape(shape.id)}
            onBlur={() => setHoveredShape(null)}
            aria-label={`Explore ${shape.name}`}
          >
            {shape.name}
          </button>
        ))}
      </div>
    </div>
  );
}
