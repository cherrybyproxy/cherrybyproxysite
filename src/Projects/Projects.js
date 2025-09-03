import styles from './Projects.module.css'
import cabinInterior from './CabinInterior.PNG'

export default function Projects () {
    return (
        <>
            <img className = {styles.cabinInterior} src = {cabinInterior} alt = 'Cabin Interior' width = '100%' height = '100%'/>
            <div className = {styles.pageContainer}>
                <p className = {styles.title}>Projects</p>
                <p className = {styles.text}>hello git</p>
            </div>
        </>
    )
}