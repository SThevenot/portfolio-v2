/** @format */

import React from "react";
import "../../styles/home.css";
import sarah from "../../images/sarah.jpeg";
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  return (
    <div className="container-fluid" id="aboutMe">
      <div className="col-3 text-center">
        <h1 id="aboutH1" className="mb-4">
          About Me...
        </h1>
        <img src={sarah} alt="Sarah" className="sarahImg" />
      </div>
      <div className="col-8 animationText">
      <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'I am a junior developer...',
    1000,
    'I am front-end focused...',
    1000,
    'I am a full-stack bootcamp graduate...',
    1000,
    'I am a dedicated coder...',
    1000,
    ]}
    speed={30} // Custom Speed from 1-99 - Default Speed: 40
    className="animation"
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />

      </div>
    </div>
  );
}
