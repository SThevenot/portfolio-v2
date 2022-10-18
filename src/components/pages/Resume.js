/** @format */

import React from "react";
import "../../styles/Resume.css";
import myResume from "../../files/sarah_resume.pdf";

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
