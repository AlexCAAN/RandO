import React from 'react';
import { NavLink } from "react-router-dom";
import Spacer50 from '../components/spacer50';

export default function Home() {
    return (
        <div className='home'>
            <div className='header'>
                <div className='inner-header'>
                    <h1>Ryan</h1>
                    <h1>&</h1>
                    <h1>Olivia's</h1>
                </div>
                <h1>Wedding</h1>
            </div>
            <Spacer50/>

            <div className='buttons'>
                <NavLink to="/story" className="story button">
                    <h1>Our Story</h1>
                </NavLink>
                <Spacer50/>
                <NavLink to="/details" className="details button">
                    <h1>Details</h1>
                </NavLink>
                <Spacer50/>
                <NavLink to="/gifts" className="gifts button">
                    <h1>Gifts</h1>
                </NavLink>
            </div>
        </div>
    )
}