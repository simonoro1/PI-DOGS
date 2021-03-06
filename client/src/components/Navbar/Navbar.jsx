import React from 'react'
import styles from './navbar.module.css';
import logo from '../../dog.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className={styles.container}>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt="" className={styles.img}/>
                </Link>
                {/* <i className="fas fa-bone"></i> */}
            </div>
            <nav className={styles.menu}>
                <ul className={styles.nav}>
                    <li><Link to='/home'  className={styles.links}>Home</Link></li>
                    <Link to='/create' className={styles.links}>
                        <button className={styles.create}>
                            Create
                        </button>   
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
