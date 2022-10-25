/** @format */

import React, { useRef } from "react";
import "../../styles/ContactMe.css";
import emailjs from "emailjs-com";
import { Alert } from "react-bootstrap";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cd6a3ku",
        "template_0xwnvoc",
        form.current,
        "pbV0nbB-ZGpfOKdZ0"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("successP").innerHTML = "Success! Message Sent!";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contactMe">
      <form ref={form} onSubmit={sendEmail}>
        <h1 className="formTitle">Contact Me</h1>
        <label>Name</label>
        <input type="text" name="name" placeholder="your name" />
        <label>Email</label>
        <input name="email" type="email" placeholder="your email" />
        <label>Message</label>
        <textarea name="message" id="message"></textarea>
        <button type="submit" value="Send" id="formBtn">
          Submit
        </button>
        <p id="successP"></p>
      </form>
    </div>
  );
}

export default ContactMe;
