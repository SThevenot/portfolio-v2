/** @format */

import React from "react";

import "../styles/Navbar.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1 id="title">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Sarah Thevenot
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a
              href="#aboutMe"
              onClick={() => handlePageChange("About-me")}
              className={
                currentPage === "About-me" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={() => handlePageChange("Education")}
              className={
                currentPage === "Education" ? "nav-link active" : "nav-link"
              }
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#my-work"
              onClick={() => handlePageChange("MyWork")}
              className={
                currentPage === "My-work" ? "nav-link active" : "nav-link"
              }
            >
              My Work
            </a>
          </li>
          <li>
            <a
              href="#form-section"
              onClick={() => handlePageChange("ContactMe")}
              className={
                currentPage === "Contact-me" ? "nav-link active" : "nav-link"
              }
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavTabs;
