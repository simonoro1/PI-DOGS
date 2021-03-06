import React, {useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import styles from './home.module.css'
// import Dog from '../components/Dog/Dog';
import Search from '../components/Search/Search';
import Footer from '../components/Footer/Footer';
import Dogs from '../components/Dogs/Dogs.jsx';
import { fetchDogs, getTemperaments} from '../actions/actions';
import {useDispatch} from 'react-redux'


const Home = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchDogs())
        dispatch(getTemperaments())
    }, [dispatch])
    return (
        <div className="">
            <Navbar/>
                <Search/>
            <div className={styles.container}>
                <Dogs/>
            </div>
            <Footer/>            
        </div>
    )
}


export default Home;