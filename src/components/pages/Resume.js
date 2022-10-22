/** @format */

import React from "react";
import "../../styles/Resume.css";
import myResume from "../../files/sarah-thevenot-resume.pdf";
import "../../styles/Education.css"

export default function Resume() {
  return (
    <div id="resume">
      <div>
      <h1>Resume</h1>
      <button>
        <a href={myResume} download="sarah_resume.pdf">Download here</a>
      </button>
      </div>
      <div id="education">
      <dl>
          <h1>Education</h1>
          <dt>Rochester High School</dt>
          <dd>2016-2020</dd>
          <br />
          <dt>Lincoln Land Community College</dt>
          <dd>2018-2021</dd>
          <br />
          <dt>University of Denver Coding Bootcamp</dt>
          <dd>July 2022-present</dd>
        </dl>
        <br />
        </div>
    </div>
  );
}
