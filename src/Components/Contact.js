import React from "react";
import { contact, section5Title } from '../Content';


const Contact = () => {

    return (
        <div id="contact">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form action={contact.contactUrl ? contact.contactUrl : "https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}>
                        <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                        <textarea id="msg" name="message" placeholder="Your message here..." required></textarea>
                        <button style={{cursor: 'pointer'}} type="submit" id="submit"><label style={{cursor: 'pointer'}} id="not-dark">Send Message</label></button>
                    </form>
                </div>
            </div>
            </div>
        </div>
            <p id="not-dark" className="Copy">2020 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
    )
    
}



    export default Contact;