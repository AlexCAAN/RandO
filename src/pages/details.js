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

                    </div>
                </div>
                <div className='address wrapper'>
                    <h2>Address:</h2>
                    <div className='content'>
                        <img src='https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=AIzaSyBYib9Zc6QRT4QzTCOnwKRQ48P7B77xd7g' alt='map'/>
                        <p>Cavanacaw, St Johnston, <br/> Co. Donegal, F93 XP82, Ireland</p>
                    </div>
                </div>
                <div className='date-time wrapper'>
                    <h2>Date & Time:</h2>
                    <div className='content'>
                        <p>June 12th, 2023 <br/> The Ceremony Starts at 1pm</p>
                    </div>
                </div>
                <div className='contact wrapper'>
                    <h2>Contact:</h2>
                    <div className='content'>
                        <p>Olivia Chapman: Olivia.g.chapman1128@gmail.com</p>
                        <p>Ryan Boal: +353 087 461 1931</p>
                    </div>
                </div>
            </div>
        </div>
    )
}