import styles from './Home.module.css'
// import RamHead from './RamHead.PNG'
// import {useNavigate} from 'react-router-dom'

export default function Home () {
    return (
        <>
            {/* <Ram/>
            <Bag/> */}
            <div className = {styles.pageContainer}>
                <p className = {styles.text}>Click to explore.</p>
            </div>
        </>
    )
}


// function Ram() {
//     const navigate = useNavigate()
//     return (
//         <button
//             className={styles.ramClickSpace}
//             onClick={() => navigate('/About')}
//         />
//     )
// }

// function Bag() {
//     const navigate = useNavigate()
//     return (
//         <button
//             className={styles.bagClickSpace}
//             onClick={() => navigate('/Projects')}
//         />
//     )
// }