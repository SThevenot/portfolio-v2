/** @format */

import React from "react";
import "../../styles/MyWork.css";
import brewfinder from "../../images/brewfinder.png";
import fitTheMood from "../../images/signup-screenshot.png"
import hobbySpot from "../../images/hobbyspot.png"
import timedQuiz from "../../images/Screenshot (23).png"

function MyWork() {
    
  return (
    <>
      <h1>My Projects</h1>
      <div id="page1">
        <div className="project5">
          <a href="https://relero90.github.io/brewfinder/" target="_blank">
            <img src={brewfinder} />
          </a>
          <p id="darkText">Brewfinder</p>
        </div>
        <div className="project1">
          <a href="https://limitless-river-86981.herokuapp.com/" target="_blank">
            <img src={fitTheMood} alt="" />
          </a>
          <p id="darkText">Fit The Mood</p>
        </div>
        <div className="project2">
          <a
            href="https://damp-reaches-02576.herokuapp.com/"
            target="_blank"
          >
            <img src={hobbySpot} alt="" />
          </a>
          <p id="lightText">HobbySpot</p>
        </div>
        <div className="project3">
          <a
            href="https://sthevenot.github.io/timedQuiz/"
            target="_blank"
          >
            <img src={timedQuiz} alt="" />
          </a>
          <p id="lightText">Timed Quiz</p>
        </div>
      </div>
    </>
  );
}



export default MyWork;
