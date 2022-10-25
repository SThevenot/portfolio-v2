/** @format */

import React from "react";
import "../../styles/home.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="container-fluid" id="aboutMe">
      <div className="col-3 text-center">
        <h1 id="aboutH1" className="mb-4">
          About Me...
        </h1>
      </div>
      <div className="col-8 animationText">
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
            "My name is Sarah Thevenot...",
            1000,
            "I am a junior developer...",
            1000,
            "I am a full-stack bootcamp graduate...",
            1000,
          ]}
          speed={30} // Custom Speed from 1-99 - Default Speed: 40
          className="animation"
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
      </div>
      <div id="skillIconsDiv">
        <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/reactjs.svg"
          alt="React.js"
        ></img>
        <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/javascript.svg"
          alt="Javascript"
        ></img>
        <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/css.svg"
          alt="CSS"
        ></img>
        <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/html.svg"
          alt="HTML"
        ></img>
        <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/nodejs.svg"
          alt="Node.js"
        ></img>
        <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/express.svg"
          alt="Express.js"
        ></img>
        <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/graphql.svg"
          alt="GraphQL"
        ></img>
        <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/jest.svg"
          alt="Jest"
        ></img>
        <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/mongodb.svg"
          alt="MongoDB"
        ></img>
                <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/mysql.svg"
          alt="mySQL"
        ></img>
                <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/bootstrap.svg"
          alt="Bootstrap"
        ></img>
                <img
          src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/npm.svg"
          alt="npm"
        ></img>
      </div>
      <div id="aboutMeText">
          <h3>
            My name is Sarah Thevenot and I am a full-stack developer. I am determined to learn and grow as I continue my coding journey.
          </h3>
      </div>
    </div>
  );
}
