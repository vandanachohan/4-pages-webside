import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Get in Touch</h1>
      <form>
        <label htmlFor="name">Name:</label> 
        <input type="text" id="name" name="name" />
        
        <label htmlFor="email">Email:</label> 
        <input type="email" id="email" name="email" />
        
        <button type="submit">Send</button> 
      </form>
    </div>
  );
}

export default Contact;
