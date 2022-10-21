import React, { useState } from "react";
import "../../styles/ContactMe.css";

import { validateEmail } from "../../utils/helpers";

function ContactMe() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }


      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`)
      } else {
        setErrorMessage("");
      }
    
  };

  const handleFormSubmit = (e) => {

  e.preventDefault();

  if (!validateEmail(email)) {
    const isValid = validateEmail(e.target.value);
    if(!isValid) {
    setErrorMessage("Enter a valid email please")
    } else {
      setErrorMessage("");
    }
  }

  setName('');
  setMessage('');
  setEmail('');
  };

    return (
      <div id="contactMe">
        <form action="mailto:sktmh007@gmail.com" method="post">
        <label for="name">Name</label>
        <input
          value={name}
          type="text"
          name="name"
          placeholder="your name"
          onBlur={handleInputChange}
          onChange={handleInputChange}
        />
        <label for="email">Email</label>
        <input
          value={email}
          name="email"
          onBlur={handleInputChange}
          type="email"
          placeholder="your email"
          onChange={handleInputChange}
        />
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="50" rows="10" value={message} onBlur={handleInputChange} onChange={handleInputChange}></textarea>

        <button type="button" onClick={handleFormSubmit}>Submit</button>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </form>
      </div>
    )
}

export default ContactMe;