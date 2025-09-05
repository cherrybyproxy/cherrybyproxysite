import styles from './Beyond.module.css'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel.js'
import image from './SusHamster.jpg'
import Hamster from './Images/SusHamster.jpg';
import Dog from './Images/PhobicDog.JPG';
import Monkey from './Images/TiredMonkey.jpg';

export default function Beyond () {
    const carouselimg1 = [Monkey, Hamster, Dog];

    return (
        <>
            <div className = {styles.pageContainer}>
                <ExitButton/>
                <div className = {styles.scrollSpace}>
                    <h1 className = {styles.title}>BEYOND</h1>

                    <div className = {styles.triContainer}>
                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <Carousel images = {carouselimg1}/>
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