import styles from './Beyond.module.css'

export default function Beyond () {
    return (
        <>
            <div className = {styles.pageContainer}> // "pageContainer"
                <p className = {styles.title}>Beyond</p>
                <p className = {styles.text}>what am i without what i love</p>
            </div>
        </>
    )
}