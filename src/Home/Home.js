import { useRef } from 'react';
import ImageButton from './ImageButton';
import Ram from './RamHead.PNG';
import Bag from './Bag.PNG';
import Book from './Book.PNG';
import Camera from './Camera.PNG';
import styles from './Home.module.css';

export default function Home() {
  const ramRef = useRef(null);
  const bagRef = useRef(null);
  const bookRef = useRef(null);
  const cameraRef = useRef(null);

  const handleContainerClick = (e) => {
    console.log('Container clicked at:', e.clientX, e.clientY);
    
    // check buttons in z-index order (highest first)
    const buttons = [
      { ref: ramRef, name: 'ram' },
      { ref: bagRef, name: 'bag' },
      { ref: bookRef, name: 'book' },
      { ref: cameraRef, name: 'camera' }
    ];
    
    for (const button of buttons) {
      if (button.ref.current && button.ref.current.checkClick(e.clientX, e.clientY)) {
        console.log('Button hit:', button.name);
        break; // stop checking once non transparent pixel is clicked
      }
    }
  };

  return (
    <div 
      className={styles.pageContainer}
      onClick={handleContainerClick}
    >
      <ImageButton ref={cameraRef} src={Camera} to="/Beyond" className={styles.camera} />
      <ImageButton ref={bookRef} src={Book} to="/Experience" className={styles.book} />
      <ImageButton ref={bagRef} src={Bag} to="/Projects" className={styles.bag} />
      <ImageButton ref={ramRef} src={Ram} to="/About" className={styles.ram} />
      
      <p className={styles.text}>Click to explore.</p>
    </div>
  );
}