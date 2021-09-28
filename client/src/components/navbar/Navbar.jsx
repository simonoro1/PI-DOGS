import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import "./navbar.scss";

const Navbar = () => {

    const [isScrolled, setIsScrollled] = useState(false)

    window.onscroll = () => {
        setIsScrollled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    
    console.log(isScrolled)
    return (
        <div className='navbar'>
            
            <div className="container">
                <div className="left">
                    <img src="https://bonitanetworkmedia.s3.amazonaws.com/2020/06/Netflix-logo-300x219.png" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
