import styles from './Beyond.module.css'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel.js'

import VB from './AthleticsImages/VolleyballImage.webp'
import Yoga from './AthleticsImages/YogaImage.webp'
import Boulder from './AthleticsImages/BoulderingImage.webp'

import BigRat from './CrochetImages/BigRatImage.heic'
import Bouquet from './CrochetImages/BouquetImage.heic'
import SmallRat from './CrochetImages/SmallRatImage.HEIC'
import Skirt from './CrochetImages/SkirtImage.heic'
import Bunny from './CrochetImages/BunnyImage.heic'

import Cat from './ClayImages/CatImage.heic'
import Fish from './ClayImages/FishImage.HEIC'
import Gift from './ClayImages/GiftImage.HEIC'
import Keychain from './ClayImages/KeychainImage.heic'
import Monkey from './ClayImages/MonkeyImage.heic'
import RatBunny from './ClayImages/RatBunnyImage.heic'
import Shell from './ClayImages/ShellImage.heic'
import ShinyKey from './ClayImages/ShinyKeychain.heic'
import Teeth from './ClayImages/TeethImage.heic'

import Brownie from './BakingImages/BrownieImage.webp'
import Bun from './BakingImages/BunImage.webp'
import Carrot from './BakingImages/CarrotImage.webp'
import Cinna from './BakingImages/CinnaImage.webp'
import Heart from './BakingImages/HeartImage.HEIC'
import Matcha from './BakingImages/MatchaImage.webp'
import Mochi from './BakingImages/MochiImage.webp'
import Muffin from './BakingImages/MuffinImage.webp'
import Raspberry from './BakingImages/StrawberryImage.webp'

import Duck from './CADImages/DuckImage.heic'
import Block from './CADImages/BlockImage.heic'
import Otter from './CADImages/OtterImage.webp'

export default function Beyond() {
    const carouselimg1 = [VB, Boulder, Yoga];
    const carouselimg2 = [BigRat, Bouquet, SmallRat, Skirt, Bunny];
    const carouselimg3 = [ShinyKey, Monkey, Cat, Fish, Gift, RatBunny, Shell, Keychain, Teeth];
    const carouselimg4 = [Matcha, Brownie, Bun, Carrot, Cinna, Heart, Mochi, Muffin, Raspberry];
    const carouselimg5 = [Duck, Block, Otter];

    return (
        <>
            <div className={styles.pageContainer}>
                <ExitButton />
                <div className={styles.scrollSpace}>
                    <h1 className={styles.title}>BEYOND</h1>

                    <div className={styles.triContainer}>
                        <div className={styles.hobbyContainer}>
                            <div className={styles.projectImg}>
                                <Carousel images={carouselimg1} />
                            </div>
                            <div className={styles.projectCaption}>
                                <h2>Athletics</h2>
                                <p>I'm a gym rat! I enjoy playing volleyball and tennis, and I've also recently picked up bouldering.</p>
                            </div>
                        </div>

                        <div className={styles.hobbyContainer}>
                            <div className={styles.projectImg}>
                                <Carousel images={carouselimg2} />
                            </div>
                            <div className={styles.projectCaption}>
                                <h2>Crochet</h2>
                                <p>I make anything from plushies to tiered skirts. WIP: 1 big rat for a cool person.</p>
                            </div>
                        </div>

                        <div className={styles.hobbyContainer}>
                            <div className={styles.projectImg}>
                                <Carousel images={carouselimg3} />
                            </div>
                            <div className={styles.projectCaption}>
                                <h2>Clay Art</h2>
                                <p>I love customizing my jewelry and creating figurines.</p>
                            </div>
                        </div>

                    </div>

                    <div className={styles.triContainer}>
                        <div className={styles.hobbyContainer}>
                            <div className={styles.projectImg}>
                                <Carousel images={carouselimg4} />
                            </div>
                            <div className={styles.projectCaption}>
                                <h2>Baking</h2>
                                <p>I can't cook...</p>
                            </div>
                        </div>

                        <div className={styles.hobbyContainer}>
                            <div className={styles.projectImg}>
                                <Carousel images={carouselimg5} />
                            </div>
                            <div className={styles.projectCaption}>
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
        <button onClick={click} className={styles.exitButton}>X</button>
    )
}