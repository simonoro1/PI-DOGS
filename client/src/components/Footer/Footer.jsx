import React from 'react'
import styles from './footer.module.css'
import logo from '../../dog.png'
import './icons.css'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className="pageInfo">
                    <img src={logo} alt="" className={styles.logo}/>
                </div>
                <div className={styles.details}>
                    <a href="https://www.instagram.com/simonn_oro/">
                        <i className="fab fa-instagram footer-i instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/simon-oro-5a30b3197/">
                        <i className="fab fa-linkedin-in footer-i linkedin"></i>
                    </a>
                    <a href="https://github.com/simonoro1">
                        <i className="fab fa-github footer-i github"></i>
                    </a>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className="rights">@2021 Simon. All rights reserved.</div>
                <div className="doggys"> 
                    <span>
                        16,552,481 dogs created
                    </span> 
                    {/* <i>dog</i> */}
                 </div>
            </div>
        </div>
    )
}

export default Footer
