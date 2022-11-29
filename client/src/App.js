/** @format */

import React, { Component } from "react";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import MyWork from "./components/pages/MyWork";
import ContactMe from "./components/pages/ContactMe";
import Resume from "./components/pages/Resume";
import ThemeToggler from "./components/pages/ThemeToggler";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavTabs
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
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
    </ApolloProvider>
  );
}

export default App;
