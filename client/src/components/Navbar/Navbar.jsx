import React from 'react'
import styles from './navbar.module.css';
import logo from '../../dog.png'

function Navbar() {
    return (
        <div className={styles.container}>
            <div className="logo">
                <img src={logo} alt="" />
                {/* <i class="fas fa-bone"></i> */}
            </div>
            <nav className={styles.menu}>
                <ul className={styles.nav}>
                    <li>Home</li>
                    <li>Create</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
