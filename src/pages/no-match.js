import React from 'react';
import { NavLink } from "react-router-dom";

export default function NoMatch() {
    return (
        <div>
            this is the not matching page
            <NavLink to="/">Home</NavLink>
        </div>
    )
}