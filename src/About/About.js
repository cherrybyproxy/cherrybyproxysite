import styles from './About.module.css'

export default function About () {
    return (
        <>
            <div className = {styles.pageContainer}>
                <p className = {styles.title}>About</p>
                <p className = {styles.text}>Hey! I'm Leah and I'm a software engineering 2A student at the University of Waterloo.
                    I'm passionate about full-stack development, robotics, and DB management.
                </p>
            </div>
        </>
    )
}