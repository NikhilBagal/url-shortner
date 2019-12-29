import React from 'react'
import Logo from '../images/logo.svg'
import '../App.css'

function Header() {
    function handleClick(){
        var selector = document.querySelectorAll('nav ul');
        selector.forEach(item => {
            item.classList.toggle('active')
        })
    }
    return(
        <nav>
            <div className="menu">
                <img src={Logo} alt="logo"></img>
                <span className="menu-icon" onClick={handleClick}>&#9776;</span>
            </div>
            <ul id="first-list">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
            <ul id="second-list">
                <li id="login-link"><a href="#">Login</a></li>
                <li id="sign-btn"><a href="#">Sign Up</a></li>
                
            </ul>
        </nav>
        )
    }

export default Header