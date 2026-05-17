import styles from './About.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './ProfileImage.png'

export default function About() {
  const [zoomProgress, setZoomProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    let scrollAmount = 0
    const maxScrollAmount = 500 // Total scroll needed to complete zoom
    let touchStartY = 0

    const updateProgress = (delta) => {
      // Only increase zoom, don't allow scrolling back
      if (delta > 0) {
        scrollAmount += delta
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

    const handleWheel = (e) => {
      e.preventDefault()
      updateProgress(e.deltaY)
    }

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e) => {
      e.preventDefault()
      const currentY = e.touches[0].clientY
      const deltaY = touchStartY - currentY

      updateProgress(deltaY)
      touchStartY = currentY
    }

    // Add listeners to the window
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [navigate])

  return (
    <>
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
        <p className={styles.title}>Hey, I'm Leah! &nbsp; ཐི^.  ̞.^ཋྀ</p>
        <div className={styles.bioContainer}>
          <div className={styles.textContainer}>
            <p className={styles.text}>I'm a 2B Software Engineering student at the University of Waterloo.</p>
            <p className={styles.text}>Let's connect!</p>
            <div className={styles.linkContainer}>
              <a href="https://github.com/cherrybyproxy" target="_blank" rel="noopener noreferrer">[GITHUB]</a>
              <a href="https://www.linkedin.com/in/leah06/" target="_blank" rel="noopener noreferrer">[LINKEDIN]</a>
              <a href="mailto:leah960319@gmail.com">[EMAIL]</a>
            </div>
            <p className={styles.text3}>♬ˎˊ˗ The Peace - underscores</p>
          </div>
          <img className={styles.profile} src={Profile} alt="Profile"></img>
        </div>
        <p className={styles.text2}>Continue scrolling.</p>
      </div>
      <div className={styles.scrollTracker}>
        Progress: {(zoomProgress * 100).toFixed(0)}%
      </div>
    </>
  )
}