import styles from './Beyond.module.css'
import { useNavigate } from 'react-router-dom'
import image from './SusHamster.jpg'

export default function Beyond () {
    return (
        <>
            <div className = {styles.pageContainer}>
                <ExitButton/>
                <div className = {styles.scrollSpace}>
                    <h1 className = {styles.title}>BEYOND</h1>

                    <div className = {styles.triContainer}>
                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <img src = {image} alt = "Athletics"></img>
                            </div>
                            <div className = {styles.projectCaption}>
                                <h2>Athletics</h2>
                                <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                            </div>
                        </div>

                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <img src = {image} alt = "Crochet"></img>
                            </div>
                            <div className = {styles.projectCaption}>
                                <h2>Crochet</h2>
                                <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                            </div>
                        </div>

                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <img src = {image} alt = "Clay Art"></img>
                            </div>
                            <div className = {styles.projectCaption}>
                                <h2>Clay Art</h2>
                                <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                            </div>
                        </div>
                    </div>

                    <div className = {styles.triContainer}>
                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <img src = {image} alt = "CAD"></img>
                            </div>
                            <div className = {styles.projectCaption}>
                                <h2>CAD</h2>
                                <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                            </div>
                        </div>

                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <img src = {image} alt = "Baking"></img>
                            </div>
                            <div className = {styles.projectCaption}>
                                <h2>Baking</h2>
                                <p>Financial tracker to manage debt between friends. Built at McHacks 2025.</p>
                            </div>
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