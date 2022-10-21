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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavTabs
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              path="/resume/education"
              element={[<Education />, <Resume />]}
            ></Route>
            <Route path="/projects" element={<MyWork />}></Route>
            <Route path="/contact" element={<ContactMe />}></Route>
          </Routes>
        </div>
        <section id="themeToggler">
          <ThemeToggler />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </Router>
    </>
  );
}

export default App;
