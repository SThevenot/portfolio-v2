/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import "../../styles/ThemeToggler.css"

export default function ThemeToggler() {
  return (
    <div>
      <Button
        id="hero-btn1"
        variant="primary"
        onClick={() => document.body.setAttribute("data-theme", "light-theme")}
      >
        Light
      </Button>
      <Button
        id="hero-btn1"
        variant="primary"
        onClick={() => document.body.setAttribute("data-theme", "forest-theme")}
      >
        Forest
      </Button>
    </div>
  );
}
