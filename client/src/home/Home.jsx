import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styles from './home.module.css'
// import Dog from '../components/Dog/Dog';
import Search from '../components/Search/Search';
import Footer from '../components/Footer/Footer';
import Dogs from '../components/Dogs/Dogs';

const Home =  () => {
    
    return (
        <div className="">
            <Navbar/>
            <div className={styles.container}>
                <Search/>
                {/* <Dog/> */}
                <Dogs/>
            </div>
            <Footer/>            
        </div>
    )
}


export default Home;