import React from 'react'
import Logo from '../images/logo.svg'
import '../App.css'

function Header() {
    return(
        <nav>
            <ul id="first-list">
                <li><img src={Logo} alt="logo"></img></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
            <ul id="second-list">
                <li><a href="#">Login</a></li>
                <li id="sign-btn"><a href="#">Sign Up</a></li>
            </ul>
        </nav>
        )
    }

export default Header