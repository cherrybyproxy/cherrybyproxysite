import styles from './About.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './ProfileImage.png'

export default function About () {
    const [zoomProgress, setZoomProgress] = useState(0)
    const navigate = useNavigate()
  
    useEffect(() => {
      let scrollAmount = 0
      const maxScrollAmount = 500 // Total scroll needed to complete zoom
  
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
            navigate('/home')
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
            <p className={styles.title}>Hey, I'm Leah! 𓆩^._.^𓆪</p>
            <div className={styles.bioContainer}>
                <p className={styles.text}>I'm a 2A Software Engineering student at the University of Waterloo.</p>
                <img className={styles.profile} src={Profile} alt="Profile"></img>
            </div>
            <p className={styles.text2}>Continue scrolling.</p>
        </div>
        <div className={styles.scrollTracker}>
            Zoom Progress: {(zoomProgress * 100).toFixed(0)}%
        </div>
        </div>
    )
}