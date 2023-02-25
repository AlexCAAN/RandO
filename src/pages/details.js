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
                <h2>AirBnB options:</h2>
                <h2>Address:</h2>
                <h2>Date & Time:</h2>
                <h3>June 12th, 2023</h3>
                <h3>The Ceremony Starts at 1pm</h3>
                <h2>Contact:</h2>
                <h3>Olivia.g.chapman1128@gmail.com</h3>
                <h3>+353 087 461 1931</h3>
            </div>
        </div>
    )
}