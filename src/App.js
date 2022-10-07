/** @format */

import React from "react";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <NavTabs />
      <section id="about-me">
        <Home />
      </section>
      <Footer />
    </>
  );
}

export default App;
