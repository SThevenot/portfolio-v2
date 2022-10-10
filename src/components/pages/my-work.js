/** @format */

import React from "react";
import "../../styles/MyWork.css";
import brewfinder from "../../images/brewfinder.png";
import skz from "../../images/skz-site.png";
import landingPage from "../../images/horiseon.png";
import cssCheatSheet from "../../images/css-cheat-sheet.png";
import randomPasswordGenerator from "../../images/screenshot-2.png";
import timedQuiz from "../../images/Screenshot (23).png";
import scheduler from "../../images/Screenshot (27).png";
import weatherApi from "../../images/ss2-mod6.png";

export default function MyWork() {
  return (
    <>
      <h1>My Projects</h1>
      <div id="page1">
        <div className="project5">
          <a href="https://relero90.github.io/brewfinder/" target="_blank">
            <img src={brewfinder} />
          </a>
          <p>Brewfinder Group Project</p>
        </div>
        <div className="project1">
          <a href="https://sthevenot.github.io/fanpage/" target="_blank">
            <img src={skz} alt="" />
          </a>
          <p>Landing Page Website</p>
        </div>
        <div className="project2">
          <a
            href="https://sthevenot.github.io/module-1-challenge/"
            target="_blank"
          >
            <img src={landingPage} alt="" />
          </a>
          <p>Horiseon Module 1 Challenge</p>
        </div>
        <div className="project3">
          <a
            href="https://sthevenot.github.io/css-cheat-sheet/"
            target="_blank"
          >
            <img src={cssCheatSheet} alt="" />
          </a>
          <p>CSS Cheat Sheet Mini Project</p>
        </div>
      </div>
      <div id="page2">
        <div className="project6">
          <a
            href="https://sthevenot.github.io/random-password/"
            target="_blank"
          >
            <img src={randomPasswordGenerator} alt="" />
          </a>
          <p>Random Password Generator</p>
        </div>
        <div className="project7">
          <a href="https://sthevenot.github.io/module4/" target="_blank">
            <img src={timedQuiz} alt="" />
          </a>
          <p>Timed Quiz</p>
        </div>
        <div className="project8">
          <a href="https://sthevenot.github.io/work-scheduler/" target="_blank">
            <img src={scheduler} alt="" />
          </a>
          <p>Work Day Scheduler</p>
        </div>
        <div className="project9">
          <a href="https://sthevenot.github.io/weatherAPI/" target="_blank">
            <img src={weatherApi} alt="" />
          </a>
          <p>Weather API</p>
        </div>
      </div>
      <nav aria-label="Page navigation example" id="page-nav">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#my-work" id="prevBtn">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#my-work" id="oneBtn">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#my-work" id="twoBtn">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#my-work" id="nextBtn">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
