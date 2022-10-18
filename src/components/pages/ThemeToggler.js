/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import "../../styles/ThemeToggler.css"

export default function ThemeToggler() {
  return (
    <div>
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
      </div>
    </div>
  );
}
