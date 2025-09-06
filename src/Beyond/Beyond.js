import styles from './Beyond.module.css'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel.js'

import Hamster from './Images/SusHamster.jpg';
import Dog from './Images/PhobicDog.JPG';
import Monkey from './Images/TiredMonkey.jpg';

/* athletics*/


export default function Beyond () {
    const carouselimg1 = [Monkey, Hamster, Dog];
    const carouselimg2 = [Monkey, Hamster, Dog];
    const carouselimg3 = [Monkey, Hamster, Dog];
    const carouselimg4 = [Monkey, Hamster, Dog];
    const carouselimg5 = [Monkey, Hamster, Dog];

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
                                <p>I enjoy playing volleyball and tennis. You'll also find me at the gym in the mornings.</p>
                            </div>
                        </div>

                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <Carousel images = {carouselimg2}/>
                            </div>
                            <div className = {styles.projectCaption}>
                                <h2>Crochet</h2>
                                <p>I make anything from plushies to a tiered skirt. WIP: 2 big rats for cool people.</p>
                            </div>
                        </div>

                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <Carousel images = {carouselimg3}/>
                            </div>
                            <div className = {styles.projectCaption}>
                                <h2>Clay Art</h2>
                                <p>I am a big fan of customizing my jewelry and creating figurines.</p>
                            </div>
                        </div>

                    </div>

                    <div className = {styles.triContainer}>
                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <Carousel images = {carouselimg4}/>
                            </div>
                            <div className = {styles.projectCaption}>
                                <h2>CAD</h2>
                                <p>I am a Fusion360 fan. Trying to learn how to use KiCAD.</p>
                            </div>
                        </div>

                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <Carousel images = {carouselimg5}/>
                            </div>
                            <div className = {styles.projectCaption}>
                                <h2>Baking</h2>
                                <p>I can't cook!</p>
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