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
                            <p>Worked on maintaining and improving a Dynamic Currency Conversion (DCC) system for ATM transactions. Diagnosed and resolved software issues by analyzing SQL queries, XML files, and Lusis Payments TANGO logs to ensure reliable processing. Customized and configured client setups on Linux, and contributed to team efficiency by documenting updates, presenting defect analyses, and supporting production with clear solutions.</p>
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
                                <h4>Jun 2023 - Jun 2024</h4>
                            </div>
                            <p>Led and supported large-scale STEM initiatives by coordinating 20+ technical meetings with up to 60 team members. Guided peers through electronics design and assembly, mentoring them in circuit building, soldering, and quality assurance with tools like PhoenixTuner. Beyond the technical side, organized community STEM conferences with 50-150 participants, helping spark local interest in engineering and technology.</p>
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
                                <h4>Oct 2023 - Dec 2023</h4>
                            </div>
                            <p>Facilitated hands-on STEAM workshops for K-8 students, covering topics from 3D design and woodworking to block coding and chemical reactions. Managed classes of up to eight students, both independently and alongside other instructors, while adapting lessons to different learning styles. Focused on creating an engaging environment that encouraged curiosity, problem-solving, and confidence through interactive, project-based learning.</p>
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