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
                    <i className="fab fa-instagram footer-i instagram"></i>
                    <i className="fab fa-linkedin-in footer-i linkedin"></i>
                    <i className="fab fa-github footer-i github"></i>
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
