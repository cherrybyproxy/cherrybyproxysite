import styles from './Projects.module.css'
import { useNavigate } from 'react-router-dom'

export default function Projects () {
    return (
        <>
            <div className = {styles.pageContainer}>
                <div className = {styles.scrollSpace}>
                    <ExitButton/>
                    <p className = {styles.title}>Projects</p>
                    <p className = {styles.text}>hello git</p>
                    <p className = {styles.text}>These are the eyes and the lies of the taken <br/>
                        These are their hearts but their hearts don't beat like ours<br/>
                        They burn 'cause they are all afraid<br/>
                        For every one of us, there's an army of them<br/>
                        But you'll never fight alone<br/>
                        'Cause I wanted you to know<br/>
                        That the world is ugly<br/>
                        But you're beautiful to me<br/>
                        Well are you thinking of me now (now)<br/>
                        These are the nights and the lights that we fade in<br/>
                        These are the words but the words aren't coming out<br/>
                        They burn 'cause they are hard to say<br/>
                        For every failing sun, there's a morning after<br/>
                        Though I'm empty when you go<br/>
                        I just wanted you to know<br/>
                        That the world is ugly<br/>
                        But you're beautiful to me<br/>
                        Are you thinking of me<br/>
                        Like I'm thinking of you<br/>
                        I would say I'm sorry, though<br/>
                        Though I really need to go<br/>
                        I just wanted you to know<br/>
                        I wanted you to know<br/>
                        I wanted you to know<br/>
                        I'm thinking of you every night, every day<br/>
                        These are the eyes and the lies of the taken<br/>
                        These are their hearts but their hearts don't beat like ours<br/>
                        They burn 'cause they are all afraid<br/>
                        When mine beats twice as hard<br/>
                        'Cause the world is ugly<br/>
                        But you're beautiful to me<br/>
                        Are you thinking of me<br/>
                        Like I'm thinking of you<br/>
                        I would say I'm sorry, though<br/>
                        Though I really need to go<br/>
                        I just wanted you to know<br/>
                        That the world is ugly (I just wanted you to know)<br/>
                        But you're beautiful to me (I just wanted you to know)<br/>
                        Are you thinking of me<br/>
                        Stop your crying, helpless feeling<br/>
                        Dry your eyes and start believing<br/>
                        There's one thing they'll never take from you</p>
                </div>
            </div>
        </>
    )
}

function ExitButton() {
    const navigate = useNavigate();
    const click = () => {
        navigate('/home');
    }
    return (
        <button onClick = {click}>X</button>
    )
}