/** @format */

import React from "react";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import MyWork from "./components/pages/MyWork";
import ContactMe from "./components/pages/ContactMe";
import Resume from "./components/pages/Resume";
import ThemeToggler from "./components/pages/ThemeToggler";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
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
            <Route exact path="/portfolio-v2" element={<Home />}></Route>
            <Route
              path="/resume"
              element={<Resume />}
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
    </ApolloProvider>
  );
}

export default App;
