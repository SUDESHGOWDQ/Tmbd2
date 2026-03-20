import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./index.css";

function ContactPage() {
 

 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ybggv25', 'template_p4tkzkb', form.current, {
        publicKey: 'FmOIszszd4CiYs9ob',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Movie Hub 🎥</h1>
        <p>We'd love to hear from you! Feel free to reach out with any questions or feedback.</p>
      </header>

      <div className="contact-content">
        <div className="contact-details">
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Email:</strong> support@moviehub.com</li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Location:</strong> Bangalore, India</li>
          </ul>
        </div>

	  <form className="contact-form " ref={form} onSubmit={sendEmail}>
	  <h2>Send Us a Message</h2>
     <div className="form-group">
	  <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="submit-button" type="submit" value="Send" />
	 </div>
    </form>
       
      </div>
    </div>
  );
}

export default ContactPage;