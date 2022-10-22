/** @format */
import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/Navbar.css";
import { bubble as Menu } from "react-burger-menu";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class NavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 767 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <nav>
        {isDesktop ? (
          <>
            <Navbar>
              <Container>
                <Navbar.Brand id="title"><NavLink to="/">Sarah Thevenot</NavLink></Navbar.Brand>
                <Nav className="me-auto">
                  <ul>
                  <NavLink to="/resume" className="links">Resume</NavLink>
                  <NavLink to="/projects" className="links">Projects</NavLink>
                  <NavLink to="/contact" className="links">Contact Me</NavLink>
                  </ul>
                </Nav>
              </Container>
            </Navbar>
          </>
        ) : (
          <>
            <h1 id="title">
              <NavLink to="/">Sarah Thevenot</NavLink>
            </h1>
            <Menu right>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/themetoggler">Theme Toggler</NavLink>
                </li>
                <li>
                  <NavLink to="/resume">Resume</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">My Work</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Me</NavLink>
                </li>
              </ul>
            </Menu>
          </>
        )}
      </nav>
    );
  }
}

export default NavTabs;
