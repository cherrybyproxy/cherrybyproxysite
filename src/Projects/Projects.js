import styles from './Projects.module.css'
import { useNavigate } from 'react-router-dom'
import image from './SusHamster.jpg'

export default function Projects () {
    return (
        <>
            <div className = {styles.pageContainer}>
                <ExitButton/>
                <div className = {styles.scrollSpace}>
                    <h1 className = {styles.title}>PROJECTS</h1>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "UoMe"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>UoMe</h2>
                            <div className = {styles.dtContainer}>
                                <h3>Python, SQLite, React Native, JS, HTML/CSS</h3>
                                <h4>Jan 2025</h4>
                            </div>
                            <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                        </div>
                    </div>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "Wat-a-Moment"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>Wat-a-Moment</h2>
                            <div className = {styles.dtContainer}>
                                <h3>Python, SQL, Flask, HTML/CSS</h3>
                                <h4>Dec 2024</h4>
                            </div>
                            <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                        </div>
                    </div>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "Bad Ice Cream"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>Adobe Flash Game Re-creation</h2>
                            <div className = {styles.dtContainer}>
                                <h3>Java, Git</h3>
                                <h4>Jan 2024</h4>
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