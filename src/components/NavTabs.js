/** @format */
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Navbar.css";
import { bubble as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <nav>
      <h1 id="title"><NavLink to="/">Sarah Thevenot</NavLink></h1>
      <Menu {...props} right>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/themetoggler">Theme Toggler</NavLink>
          </li>
          <li>
            <NavLink to="/education/resume">Resume/Education</NavLink>
          </li>
          <li>
            <NavLink to="/projects">My Work</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
        </ul>
      </Menu>
    </nav>
  );
};
