import React, {useState} from 'react';
import './LogInPopUp.css'
import {assets} from "../../assets/assets";

const LogInPopUp = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign up")

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)}/>
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type="text" placeholder="Your name" required/>}
                    <input type="email" placeholder="Your email" required/>
                    <input type="password" placeholder="Password" required/>
                </div>
                <button>{currentState === "Sign up" ? "Create account" : "Log in"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState === "Login" ? <p>Create a new account? <span onClick={() => setCurrentState("Signup")}>Click here</span></p> :
                    <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Log in</span></p>}
            </form>
        </div>
    )
}

export default LogInPopUp;