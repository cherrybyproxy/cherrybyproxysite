import styles from './Home.module.css'
import cabinExterior from './CabinExterior.PNG'

export default function Home () {
    return (
        <>
            <img className = {styles.cabinExterior} src = {cabinExterior} alt = "Cabin Exterior" width = "100%" height = "100%"/>
            <div className = {styles.pageContainer}>
                <p className = {styles.title}>WELCOME TO LEAH'S CABIN</p>
                <p className = {styles.text}>Scroll to enter.</p>
            </div>
        </>
    )
}