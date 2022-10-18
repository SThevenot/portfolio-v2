/** @format */

import React from "react";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import Education from "./components/pages/Education";
import MyWork from "./components/pages/MyWork";
import ContactMe from "./components/pages/ContactMe";
import Resume from "./components/pages/Resume";
import ThemeToggler from "./components/pages/ThemeToggler";

function App() {
  return (
    <>
      <section id="navTabs">
        <NavTabs />
      </section>
      <section id="aboutMe">
        <Home />
      </section>
      <section id="themeToggler">
        <ThemeToggler/>
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="myWork">
        <MyWork />
      </section>
      <section id="contactMe">
        <ContactMe />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
