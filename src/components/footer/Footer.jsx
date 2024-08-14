import React from 'react';
import './Footer.css'
import {assets} from "../../assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} className="logo" alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit eros lacinia sociosqu, felis molestie phasellus interdum habitasse ac vitae mauris. Aptent consequat placerat quis vulputate quam sollicitudin conubia mollis ante auctor, dictumst velit nulla est ultrices curabitur dictum fusce sagittis, taciti aliquet nisi etiam odio tincidunt natoque parturient magna.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon}/>
                        <img src={assets.twitter_icon}/>
                        <img src={assets.linkedin_icon}/>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+1-123-365-5667</li>
                        <li>emailtest@mail.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 @ Something about - All rights reserved</p>
        </div>
    )
}

export default Footer;