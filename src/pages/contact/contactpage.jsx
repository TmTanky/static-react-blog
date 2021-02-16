import React from 'react'

// CSS
import './contact.css'

const ContactPage = () => {
    return (
        <div className="contactbox">
            <div className="contact1">
                <h1> Contact Us </h1>
            </div>
            
            <div className="contact2">
                <li> <a href="https://www.facebook.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/facebook.png"/> </a> </li>
                <li> <a href="https://www.twitter.com/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/twitter-squared.png"/> </a> </li>
                <li> <a href="https://www.instagram.com/" target="_blank"> <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/> </a> </li>
            </div>
        </div>
    )
}

export default ContactPage