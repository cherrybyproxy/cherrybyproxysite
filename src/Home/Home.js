import styles from './Home.modules.css';

export default function Home () {
    return (
        <>
            <div className = {styles.pageContainer}>
                <p className = {styles.title}>Welcome to my cabin!!!</p>
                <p className = {styles.text}>scroll to enter... scroll to leave...</p>
            </div>
        </>
    )
}