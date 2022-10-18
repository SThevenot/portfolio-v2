/** @format */

import React from "react";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import Education from "./components/pages/Education";
import MyWork from "./components/pages/My-work";
import Form from "./components/pages/Contact-me";
import Resume from "./components/pages/Resume";
import PageTwo from "./components/pages/PageTwo";
import Theme from "./components/pages/theme";
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

const themes = {
  light: 'public/light.css',
  dark: 'public/dark.css',
  forest: "./styles/themes/forest.css"
};

function App() {
  return (
      <>
      <ThemeSwitcherProvider defaultTheme="forest" themeMap={themes}>
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
        <section id="pageTwo" style={{display: "none"}}>
          <PageTwo />
        </section>
        {/* <section id="theme-picker">
          <Theme />
        </section>  */}
        <section id="form-section">
          <Form />
        </section>
        <section id="footer">
          <Footer />
        </section>
        </ThemeSwitcherProvider>
      </>
  );
}

export default App;
