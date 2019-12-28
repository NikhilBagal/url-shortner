import React from 'react'
import brandIcon from '../images/icon-brand-recognition.svg'
import detailedRecordIcon from '../images/icon-detailed-records.svg'
import fullyCustomizableIcon from '../images/icon-fully-customizable.svg'

function CardArea(){
    return(
        <div className="card-area">
            <div className="card-area-head-text">
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with<br/> our 
                advanced statistics dashboard.</p>
            </div>
            <div className="cards">
                <div className='card-1'>
                    <img src={brandIcon} alt="icon"/>
                    <div className="card-text">
                        <h1>Brand Recognition</h1>
                        <p>
                            Boost your brand recognition with each click. Generic links don’t 
                            mean a thing. Branded links help instil confidence in your content.
                        </p>  
                    </div>
                </div>
                <div className='card-2'>
                    <img src={detailedRecordIcon} alt="icon"/>
                    <div className="card-text">
                        <h1>Detailed Records</h1>
                        <p>
                            Gain insights into who is clicking your links. Knowing when and where 
                            people engage with your content helps inform better decisions.
                        </p>
                    </div>
                </div>
                <div className='card-3'>
                    <img src={fullyCustomizableIcon} alt="icon"/>
                    <div className="card-text">
                        <h1>Fully Customizable</h1>
                        <p>
                            Improve brand awareness and content discoverability through customizable 
                            links, supercharging audience engagement.
                        </p>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default CardArea