import React, { useRef } from 'react'
import astronaut from '../../astronaut.jpg'
import styles from './landing.module.css'
import {Link, useHistory} from 'react-router-dom';

function Landing() {
    const history = useHistory();
    const img = useRef()

    const handleDelay = (e) => {
        e.preventDefault()

        window.setTimeout(() => {
           history.push('/home')
        }, 1000)
    }

    // const handleClick = () => {
    //     img.current.style = 'animation: bounce2 1s alternate infinite ease-in;'
    // }

    return (
        <div className={styles.container}>
            <div className="">
            <Link to='/home' onClick={handleDelay}>
                <img src={astronaut} ref={img} alt="" className={styles.img} />
            </Link>
            </div>
        </div>
    )
}

export default Landing
