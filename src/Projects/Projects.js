import styles from './Projects.module.css'
import { useNavigate } from 'react-router-dom'
import image from './SusHamster.jpg'

export default function Projects () {
    return (
        <>
            <div className = {styles.pageContainer}>
                <ExitButton/>
                <div className = {styles.scrollSpace}>
                    <p className = {styles.title}>Projects</p>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "UoMe"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>UoMe</h2>
                            <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                        </div>
                    </div>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "Wat-a-Moment"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>UoMe</h2>
                            <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                        </div>
                    </div>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "Bad Ice Cream"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>UoMe</h2>
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