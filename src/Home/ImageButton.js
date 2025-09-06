import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const ImageButton = forwardRef(({ src, to }, ref) => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    console.log('Loading image:', src);
    
    img.onload = () => {
      console.log('Image loaded successfully:', src);
      
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || window.innerWidth;
      canvas.height = rect.height || window.innerHeight;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    
    img.onerror = (error) => {
      console.error('Failed to load image:', src, error);
    };
    
    img.src = src;
  }, [src]);

  // Expose method to parent to check if click hits this button
  useImperativeHandle(ref, () => ({
    checkClick: (clientX, clientY) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = ((clientX - rect.left) * canvas.width) / rect.width;
      const y = ((clientY - rect.top) * canvas.height) / rect.height;
      
      if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {
        return false;
      }
      
      const ctx = canvas.getContext('2d');
      const pixel = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
      
      if (pixel[3] > 0) {
        console.log('Hit detected on:', src);
        navigate(to);
        return true;
      }
      
      return false;
    }
  }));

  return (
    <canvas
      ref={canvasRef}
      className={styles.buttonCanvas}
      style={{ pointerEvents: 'none' }} // Disable direct clicks
    />
  );
});

export default ImageButton;