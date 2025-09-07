import styles from './Beyond.module.css'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel.js'

export default function Beyond () {
    const carouselimg1 = ["https://imgur.com/McaPxay.jpg", "https://imgur.com/9Gegj5X.jpg"];
    const carouselimg2 = ["https://imgur.com/gYovi1L.jpg", "https://imgur.com/W153Weh.jpg", "https://imgur.com/YZaEkdb.jpg", "https://imgur.com/NTlnDis.jpg", "https://imgur.com/UzjssGe.jpg"]; 
    const carouselimg3 = ["https://imgur.com/DNxxMEY.jpg", "https://imgur.com/vCFBir6,jpg", "https://imgur.com/ayE6sPP.jpg", "https://imgur.com/TVA6wQZ.jpg", "https://imgur.com/Yg8RlxR.jpg"];
    const carouselimg4 = ["https://imgur.com/2CsXgSk.jpg", "https://imgur.com/66gz4Im.jpg", "https://imgur.com/jF3uAIX.jpg", "https://imgur.com/3jceLAI.jpg", "https://imgur.com/0UKF1Mn.jpg", "https://imgur.com/0jYQo1O.jpg", "https://imgur.com/GaAwr1f.jpg", "https://imgur.com/KCGqjLB.jpg", "https://imgur.com/IddqhSv.jpg", "https://imgur.com/9kqeQcj.jpg"];
    const carouselimg5 = ["https://imgur.com/Ewgiqbx.jpg", "https://imgur.com/fwNLOwF.jpg", "https://imgur.com/CRFoDQW.jpg"];

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
                                <h2>Baking</h2>
                                <p>I can't cook...</p>
                            </div>
                        </div>

                        <div className = {styles.hobbyContainer}>
                            <div className = {styles.projectImg}>
                                <Carousel images = {carouselimg5}/>
                            </div>
                            <div className = {styles.projectCaption}>
                                <h2>CAD</h2>
                                <p>I am a Fusion360 fan. Trying to learn how to use KiCAD.</p>
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