import React from "react";
import "../../styles/ContactMe.css";

export default function ContactMe() {
    return (
        <form action="mailto:sktmh007@gmail.com" method="post">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="message">Message</label>
        <textarea name="message" id="message" cols="50" rows="10"></textarea>

        <input type="submit" value="Submit" />
      </form>
    )
}