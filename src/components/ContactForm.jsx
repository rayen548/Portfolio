import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_portfolio',    // ⬅️ Replace with your actual service ID
        'template_a52wijo',   // ⬅️ Replace with your actual template ID
        form.current,
        'WhZJUmwzwWxuFi0u5'      // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setStatus('Message sent successfully!');
      e.target.reset();
    }, (error) => {
      console.log(error.text);
      setStatus('Failed to send message, please try again.');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label htmlFor="name">Your Name</label>
      <input type="text" name="user_name" id="name" placeholder="Enter your name" required />

      <label htmlFor="email">Your Email</label>
      <input type="email" name="user_email" id="email" placeholder="Enter your email" required />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" placeholder="Write your message" required></textarea>

      <button type="submit">Send Message</button>
      <p>{status}</p>
    </form>
  );
}

export default ContactForm;
