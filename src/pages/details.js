import React from 'react';
import { NavLink } from "react-router-dom";

export default function Details() {
    return (
        <div className='details'>
            <NavLink className="back-button" to="/"> &lt; </NavLink>
            <div className='title'>
                <h1>Details</h1>
            </div>
            <div className='information'>
                <div className='airbnb wrapper'>
                    <h2>AirBnB options:</h2>
                    <div className='content'>
                        <h3>To be decided</h3>
                    </div>
                </div>
                <div className='address wrapper'>
                    <h2>Address:</h2>
                    <div className='content'>
                        <a href='https://goo.gl/maps/yxry9B95b7RWJoDv6' rel="noreferrer" target='_blank' className='address'>
                            <p>Cavanacaw, St Johnston, Co. Donegal,<br/>F93 XP82, Ireland</p>
                        </a>
                        <div className='spacer20'/>
                        <iframe
                            title='map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18356.649552649676!2d-7.4858604!3d54.8927206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485fc2b1727ea7a9%3A0xad1cbb89e9828910!2sCavanacaw%2C%20Co.%20Donegal%2C%20F93%20XP82%2C%20Ireland!5e0!3m2!1sen!2suk!4v1677526596978!5m2!1sen!2suk"
                            width="300"
                            height="250"
                            style={{border:'0'}}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className='date-time wrapper'>
                    <h2>Date & Time:</h2>
                    <div className='content'>
                        <p>June 12th, 2023</p>
                        <p>The Ceremony Starts at 1pm</p>
                    </div>
                </div>
                <div className='contact wrapper'>
                    <h2>Contact:</h2>
                    <div className='content'>
                        <p>
                            if you are planning on attending the wedding please contact us as
                            we have limited space at our venue
                        </p>
                        <p><strong>Olivia Chapman:</strong><br/> Olivia.g.chapman1128@gmail.com</p>
                        <p><strong>Ryan Boal:</strong><br/> +353 087 461 1931</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

<div>

</div>