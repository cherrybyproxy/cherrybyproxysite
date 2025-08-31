import styles from './About.module.css'

export default function About () {
    return (
        <>
            <div className = {styles.pageContainer}>
                <p className = {styles.title}>About</p>
                <p className = {styles.text}>hey this is Leah and i love big rats</p>
            </div>
        </>
    )
}