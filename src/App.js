/** @format */

import React from "react";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import Education from "./components/pages/Education"
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <NavTabs />
      <section id="about-me">
        <Home />
      </section>
      <section id="education">
    <Education/>
    </section>
      <Footer />
    </>
  );
}

export default App;
