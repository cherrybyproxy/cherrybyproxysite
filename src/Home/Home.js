import styles from './Home.module.css'

export default function Home () {
    return (
        <>
            <div className = {styles.pageContainer}>
                <p className = {styles.text}>Click to explore.</p>
            </div>
        </>
    )
}