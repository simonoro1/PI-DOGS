import React from 'react'
import styles from './navbar.module.css';
import logo from '../../dog.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className={styles.container}>
            <div className="logo">
                <img src={logo} alt="" className={styles.img}/>
                {/* <i class="fas fa-bone"></i> */}
            </div>
            <nav className={styles.menu}>
                <ul className={styles.nav}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/create'>Create</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/favorites'>Favorites</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
