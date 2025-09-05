import styles from './Experience.module.css'
import { useNavigate } from 'react-router-dom'
import image from './SusHamster.jpg'

export default function Experience () {
    return (
        <>
            <div className = {styles.pageContainer}>
                <ExitButton/>
                <div className = {styles.scrollSpace}>
                    <p className = {styles.title}>EXPERIENCE</p>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "CIBC"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>Canadian Imperial Bank of Commerce</h2>
                            <div className = {styles.dtContainer}>
                                <h3>App / Software Developer</h3>
                                <h4>May 2025 - Aug 2025</h4>
                            </div>
                            <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                        </div>
                    </div>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "TSP"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>The STEAM Project</h2>
                            <div className = {styles.dtContainer}>
                                <h3>Assistant Instructor</h3>
                                <h4>Nov 2023 - Dec 2023</h4>
                            </div>
                            <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                        </div>
                    </div>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "Bad Ice Cream"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>First Robotics Competition 8574</h2>
                            <div className = {styles.dtContainer}>
                                <h3>Electrical Lead</h3>
                                <h4>June 2023 - June 2024</h4>
                            </div>
                            <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ExitButton() {
    const navigate = useNavigate();
    const click = () => {
        navigate('/home');
    }
    return (
        <button onClick = {click} className = {styles.exitButton}>X</button>
    )
}