/** @format */

import React from "react";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import Education from "./components/pages/Education";
import MyWork from "./components/pages/My-work";
import Form from "./components/pages/Contact-me";
import Resume from "./components/pages/Resume";
import "font-awesome/css/font-awesome.min.css";
import Theme from "./components/pages/theme";
import "./utils/theme";

function App() {
  return (
    <>
      <section id="navTabs">
        <NavTabs />
      </section>
      <section id="about-me">
        <Home />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="my-work">
        <MyWork />
      </section>
      <section id="theme-picker">
        <Theme />
      </section>
      <section id="form-section">
        <Form />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
