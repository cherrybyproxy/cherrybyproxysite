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
                                <h3>Python, Flask, React Native, TypeScript, HTML/CSS</h3>
                                <h4>Jan 2025</h4>
                            </div>
                            <p>UoMe is a debt-tracking app designed to simplify group expense management. Whether it's splitting dinner with friends or organizing a group trip, UoMe keeps track of who owes what with ease. The app features secure account management, automated expense logging from receipts, and a clean, mobile-friendly interface. With a dashboard for quick insights, detailed transaction history, and visual analytics, UoMe takes the stress out of managing payments between friends.</p>
                            <a href = "https://github.com/mchacksteam25/mchacks25" target = "_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "Wat-a-Moment"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>Wat-a-Moment</h2>
                            <div className = {styles.dtContainer}>
                                <h3>Python, JavaScript, Flask, HTML/CSS, SQL</h3>
                                <h4>Dec 2024</h4>
                            </div>
                            <p>Wat-a-Moment is a portable photo booth built with a Raspberry Pi and webcam, designed to capture and share memories on the go. Photos are securely stored in the cloud, each tagged with a unique ID for easy retrieval. A web app lets users create accounts, log in, and manage personal or shared photo libraries, making it simple for classmates or groups to access and relive their moments. Compact, connected, and user-friendly, it brings a modern twist to the classic yearbook.</p>
                            <a href = "https://github.com/cherrybyproxy/Wat-a-Moment" target = "_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>

                    <div className = {styles.projectContainer}>
                        <div className = {styles.projectImg}>
                            <img src = {image} alt = "Math Club Website"></img>
                        </div>
                        <div className = {styles.projectCaption}>
                            <h2>MGCI Math Club Website</h2>
                            <div className = {styles.dtContainer}>
                                <h3>React JS, HTML/CSS</h3>
                                <h4>June 2024</h4>
                            </div>
                            <p>A website for the MGCI Math Club that acts a hub for events, resources, and community. It features a welcoming homepage with a banner and navigation bar, a carousel to display photos from past events and highlight upcoming activities, and a resources page with lesson slides and short summaries. An “About Us” section introduces the executive team and provides contact details, making it easy for students to get involved and stay connected.</p>
                            <a href = "https://github.com/cherrybyproxy/mathclubsitev1" target = "_blank" rel="noreferrer">GitHub</a>
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
                            <p>A Java-based re-creation of the 2D multiplayer game Bad Ice Cream. Players can team up or compete while navigating maps, dodging proximity-based enemies, and breaking through obstacles. The game features smooth animations, responsive controls, adjustable audio, and a live scoreboard that updates automatically. Built with object-oriented design, it captures the fun of the original while adding polish for a more engaging gameplay experience.</p>
                            <a href = "https://github.com/cherrybyproxy/BadIceCream" target = "_blank" rel="noreferrer">GitHub</a>
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