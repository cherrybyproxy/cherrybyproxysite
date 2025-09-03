import styles from './Home.module.css'
// import cabinInterior from './CabinInterior.PNG'

export default function Home () {
    return (
        <>
            {/* <img className = {styles.cabinInterior} src = {cabinInterior} alt = "Cabin Interior" width = "100%" height = "100%"/> */}
            <div className = {styles.pageContainer}>
                <p className = {styles.text}>Click to explore.</p>
            </div>
        </>
    )
}