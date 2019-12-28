import React from 'react'
import '../App.css'
import Logo from '../images/logo.svg'
import facebookIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'
import instaIcon from '../images/icon-instagram.svg'
import pinterIcon from '../images/icon-pinterest.svg'

function Footer() {
    return(
        <footer>
            <div className="logo-img">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="link-list">
                <ul>
                    <h3>Features</h3>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
                <ul>
                    <h3>Resources</h3>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
                <ul>
                    <h3>Company</h3>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="social-connect">
                <ul>
                    <li><img src={facebookIcon} alt="logo"/></li>
                    <li><img src={twitterIcon} alt="logo"/></li>
                    <li><img src={instaIcon} alt="logo"/></li>
                    <li><img src={pinterIcon} alt="logo"/></li>
                </ul>
            </div>
        </footer>
        )
    }

export default Footer