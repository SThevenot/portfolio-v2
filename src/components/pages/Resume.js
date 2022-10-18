/** @format */

import React from "react";
import "../../styles/Resume.css";
import myResume from "../../files/sarah_resume.pdf";
import Button from "react-bootstrap/Button"

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <button>
        <a href={myResume} download="sarah_resume.pdf">Download here</a>
      </button>
    </div>
  );
}
