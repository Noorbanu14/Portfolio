import "./FormStyles.css";
import emailjs from "emailjs-com";

import React from "react";

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_xx2thmi",
        "template_3plm9do",
        e.target,
        "AcV4JEkBebX1EhhCj"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Subject</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message"/>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
