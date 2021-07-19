import "./contact.css"
import Mobile from "../../assets/mobile.png"
import React, { useState } from 'react';

export default function Contact() {

    // When user clicks button a message will come up "Thank you!"
    const [message, setMessage] = useState(false)

    // Stops the page from refreshing when clicking button "send"
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }

    return (

        // Styles for form container
        <div className="contact" id="contact">
            <div className="contactleft">
                <img className="mobileimg" src={Mobile} alt=""></img>
            </div>
                <div className="contactright">
                    <h2 className="contacth2">Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    
                    {/* Message for button */}
                    {message && <p>Thank you!</p>}
                </form>
            </div>
        </div>
    )
}
