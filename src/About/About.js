import styles from './About.module.css'

export default function About () {
    return (
        <>
            <div className = {styles.pageContainer}>
                <p className = {styles.title}>Hey, I'm Leah!</p>
                <p className = {styles.text}>I'm a 2A Software Engineering student at the University of Waterloo.
                </p>
            </div>
        </>
    )
}