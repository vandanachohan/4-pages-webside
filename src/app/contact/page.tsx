
import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Get in Touch</h1>
      <form>
        <label form="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label form="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;

