import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Exterior.module.css'
import cabinExterior from './CabinExterior.jpg'

export default function Exterior() {
  const [zoomProgress, setZoomProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    let scrollAmount = 0
    const maxScrollAmount = 2000 // Total scroll needed to complete zoom

    const handleWheel = (e) => {
      e.preventDefault()
      
      // Only increase zoom, don't allow scrolling back
      if (e.deltaY > 0) {
        scrollAmount += e.deltaY
      }
      
      // Calculate progress (0 to 1)
      const progress = Math.min(scrollAmount / maxScrollAmount, 1)
      setZoomProgress(progress)
      
      // Navigate to About when fully zoomed
      if (progress >= 1) {
        setTimeout(() => {
          navigate('/about')
        }, 500)
      }
    }

    // Add wheel listener to the window
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [navigate])

  return (
    <div className={styles.exteriorContainer}>
      <img
        className={styles.cabinExterior}
        src={cabinExterior}
        alt="Cabin Exterior"
        style={{
          transform: `scale(${1 + zoomProgress * 9})`,
          filter: `brightness(${1 - zoomProgress * 0.9})`,
        }}
      />
      <div
        className={styles.blackOverlay}
        style={{
          opacity: zoomProgress * 0.8,
        }}
      />
      <div 
        className={styles.pageContainer}
        style={{
          opacity: 1 - zoomProgress,
        }}
      >
        <p className={styles.title}>WELCOME TO LEAH'S CABIN</p>
        <p className={styles.text}>Scroll to enter.</p>
      </div>
      <div className={styles.scrollTracker}>
        Zoom Progress: {(zoomProgress * 100).toFixed(0)}%
      </div>
    </div>
  )
}