import React from 'react'
import hero from '../images/illustration-working.svg'

function HeroSec(){
    return(
        <div className="hero-sec">
            <div className='text-sec'>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed 
                <br/>insights on how your links are performing</p>
                <button>Get Started</button>
            </div>
            <div className="img-sec">
                <img src={hero} alt="hero"></img>
            </div>
        </div>
    )
}
export default HeroSec