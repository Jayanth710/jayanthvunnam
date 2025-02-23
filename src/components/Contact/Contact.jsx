import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import loaction_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


function Contact(){

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0a449e44-781c-4017-8bd6-36efa84482ef");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>You can contact ,e at anu time</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>jayanthvunnam7@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+1 720-291-0884</p>
                        </div>
                        <div className="contact-detail">
                            <img src={loaction_icon} alt="" />
                            <p>Boulder, CO, USA.</p>
                            
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your Name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" name="email" placeholder="Enter Email" />
                    <label htmlFor="">Write Your Message</label>
                    <textarea name="message" placeholder="Enter the message..." rows="8"></textarea>
                    <button type="submit" className="contact-submit">Submit</button>

                </form>
            </div>


        </div>
    )
}

export default Contact;