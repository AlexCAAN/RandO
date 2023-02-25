import React from 'react';
import { NavLink } from "react-router-dom";

export default function Gifts() {
    return (
        <div className='gifts'>
            <NavLink className="back-button" to="/"> &lt; </NavLink>
            <div className='title'>
                <h1>Gifts</h1>
            </div>
            <div className='information'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit perferendis, expedita sed ratione cum,
                    veritatis dicta amet iste vel eius aut animi esse laborum,
                    recusandae repellendus dolores deserunt minima et architecto!
                    Aut provident non voluptate.
                    Delectus qui quia dicta cupiditate expedita,
                    nihil laborum fugit veniam perferendis laboriosam in soluta
                    doloribus,
                    quisquam tenetur, facilis cum non asperiores beatae saepe a?
                    Debitis sunt repudiandae, eveniet facilis velit a nobis harum,
                    magni fugiat saepe sit animi magnam facere ullam,
                    qui placeat distinctio expedita assumenda iste enim corporis.
                    Tenetur odit quo fugiat error quis cupiditate facilis,
                    voluptatum nostrum nesciunt illum enim sit voluptate cum modi
                    reprehenderit ipsa totam corporis aspernatur rem eum maiores
                    id quam in. Repellat ullam alias quidem consequuntur quos
                    sequi eaque rerum aspernatur aut provident dicta dolore
                    voluptate, incidunt maxime.
                </p>
                <h1>Money things</h1>
            </div>
        </div>
    )
}