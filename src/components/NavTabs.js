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
      <>
        {isDesktop ? (
          <>
            <Navbar className="justify-content-end">
              <Container>
                <Navbar.Brand ><NavLink to="/portfolio-v2" id="title">Sarah Thevenot</NavLink></Navbar.Brand>
                <Nav>
                  <ul id="list">
                  <NavLink to="/resume" className="links">Resume</NavLink>
                  <NavLink to="/projects" className="links">Projects</NavLink>
                  <NavLink to="/contact" className="links">Contact Me</NavLink>
                  </ul>
                </Nav>
              </Container>
            </Navbar>
          </>
        ) : (
          <div id="hamburgerNav">
            <h1 id="title">
              <NavLink to="/portfolio-v2" id="title">Sarah Thevenot</NavLink>
            </h1>
            <Menu right>
              <ul id="list">
                <li>
                  <NavLink to="/portfolio-v2" className="links">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/resume" className="links">Resume</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="links">My Work</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="links">Contact Me</NavLink>
                </li>
              </ul>
            </Menu>
          </div>
        )}
      </>
    );
  }
}

export default NavTabs;
