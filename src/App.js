/** @format */

import React from "react";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import Education from "./components/pages/Education";
import MyWork from "./components/pages/My-work";
import ContactMe from "./components/pages/Contact-me";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <NavTabs />
      <section id="about-me">
        <Home />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="my-work">
        <MyWork />
      </section>
      <section id="form-section">
        <ContactMe />
      </section>
      <Footer />
    </>
  );
}

export default App;
