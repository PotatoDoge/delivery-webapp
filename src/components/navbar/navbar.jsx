import React, {useState} from 'react'
import './navbar.css'
import {assets} from "../../assets/assets";
import {Link} from "react-router-dom";

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <img src={assets.logo} className="logo" alt="logo" />
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active":""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active":""}>Menu</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active":""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon}></img>
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="basket-icon"/>
                    <div className="dot"></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar