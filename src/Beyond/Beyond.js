import styles from './Beyond.module.css'
import cabinInterior from './CabinInterior.PNG'

export default function Beyond () {
    return (
        <>
            <img className = {styles.cabinInterior} src = {cabinInterior} alt = "Cabin Interior" width = "100%" height = "100%"/>
            <div className = {styles.pageContainer}>
                <p className = {styles.title}>Above and Beyond</p>
                <p className = {styles.text}>what am i without what i love</p>
            </div>
        </>
    )
}