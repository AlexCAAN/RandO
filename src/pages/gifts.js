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
                <h3>
                    Dear friends and family,
                </h3>

                <p>
                    As we prepare for our wedding day, we are filled
                    with gratitude for the love and support you have shown us throughout our
                    lives.
                    Your presence at our wedding is the greatest gift we could ever ask for,
                    and we are
                    honored to have you with us if you are able to attend.
                </p>

                <p>
                    Please know that your generosity and thoughtfulness, whether it comes
                    in the form of a
                    monetary gift or simply your presence on our wedding day, means a lot to
                    us. We are excited
                    to share this time in our lives with you and we look forward to the many
                    adventures that lie
                    ahead.
                </p>

                <p>
                    Thank you again for your love and support. <br/>
                    <strong>Ryan and Olivia</strong>
                </p>

                <h3>Monetary gifts can be sent through:</h3>

                <p>
                    Cash/checks can be sent to:<br/>
                    3756 S 890 E Washington UT 84780, United States
                    (written out to Olivia Chapman)
                </p>
                <h4>Online giving is linked below:</h4>
                <a 
                href='https://paypal.me/ryanandoli?country.x=IE&locale.x=en_US'
                rel="noreferrer" target='_blank' className='paypal'>
                    <input 
                        type="image" 
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" 
                        border="0"
                        alt='donate button'
                        style={{
                            height: "2em"
                        }}
                    />
                </a>
            </div>
        </div>
    )
}