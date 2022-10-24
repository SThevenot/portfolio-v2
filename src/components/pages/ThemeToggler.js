/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import "../../styles/ThemeToggler.css"
import "../../styles/universal.css"

export default function ThemeToggler() {
  return (
    <div id="themeToggler">
      <h1> Please choose a theme! </h1>
      <div id="buttonDiv">
      <Button
        id="lightBtn"
        onClick={() => document.body.setAttribute("data-theme", "light-theme")}
      >
        Light
      </Button>
      <Button
        id="forestBtn"
        onClick={() => document.body.setAttribute("data-theme", "forest-theme")}
      >
        Forest
      </Button>
      <Button
        id="darkBtn"
        onClick={() => document.body.setAttribute("data-theme", "dark-theme")}
      >
        Dark
      </Button>
      </div>
    </div>
  );
}
