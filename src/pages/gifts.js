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
                We are excited to see you at the wedding and that is more than enough of a
                gift to be celebrating with those who love us most. And we are excited to see 
                what God has for us, whatever that may be. If you wish to support us as we
                step into the next chapter of our lives
                you may donate however much you wish and we are deeply grateful for your support!
                </p>
                <h2>Monetary gifts can be sent through:</h2>
                *paypal*
                <p>
                    Check/Cash gifts in the mail written out to Olivia Chapman and mailed to:
                    3756 S 890 E Washington Utah 84780
                </p>
            </div>
        </div>
    )
}