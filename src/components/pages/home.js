/** @format */

import React from "react";
import "../../styles/home.css";
import sarah from "../../images/sarah.jpeg";



export default function Home() {
  return (
    <div className="container-fluid" id="aboutMe">
      <div className="col-3 text-center">
        <h1 id="aboutH1" className="mb-4">
          About Me
        </h1>
        <img src={sarah} alt="Sarah" className="sarahImg" />
      </div>
      <div className="col-8">
        <p id="infoText">
          My name is Sarah Thevenot and I am currently enrolled in University of
          Denver's Coding Bootcamp. I graduated high school in 2020 and am
          recently unemployed trying to pursue my education and start a career
          as a web developer. I really enjoy building and designing websites and
          can't wait to keep learning and growing throughout this course. I
          previously was an employee at Jersey Mike's subs and worked my way up
          to assistant manager before I turned 19. I look forward to starting my
          career and making the most of my life!
        </p>
      </div>
    </div>
  );
}
