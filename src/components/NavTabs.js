/** @format */

import React, { useState } from "react";
import "../styles/Navbar.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { GiHamburgerMenu } from "react-icons/gi";

function NavTabs() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar id="navbar">
      <MDBContainer>
        <MDBNavbarBrand href="#aboutMe" id="title">Sarah Thevenot</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <GiHamburgerMenu />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0" id="navBarItems">
            <MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#aboutMe">About Me</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {" "}
                <MDBNavbarLink href="#themeToggler">
                  Theme Toggler
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#education">Education</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#resume">Resume</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#myWork">My Work</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#contactMe">Contact Me</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    // <Navbar id="navbar">
    //   <h1 id="title" className="p-3">
    //     <a
    //       href="#home"
    //       onClick={() => handlePageChange("Home")}
    //       className={currentPage === "Home" ? "nav-link active" : "nav-link"}
    //     >
    //       Sarah Thevenot
    //     </a>
    //   </h1>
    //   <Navbar.Toggle aria-controls="navbar-dark-example" />
    //   <Navbar.Collapse id="navbar-dark-example">
    //     <Nav>
    //       <NavDropdown
    //       menuVariant="dark"
    //       className="p-3 navbar-toggler-icon">
    //         <NavDropdown.Item
    //           href="#aboutMe"
    //           onClick={() => handlePageChange("About-me")}
    //           className={
    //             currentPage === "About-me" ? "nav-link active" : "nav-link"
    //           }
    //         >
    //           About Me
    //         </NavDropdown.Item>
    //         <NavDropdown.Item
    //           href="#education"
    //           onClick={() => handlePageChange("Education")}
    //           className={
    //             currentPage === "Education" ? "nav-link active" : "nav-link"
    //           }
    //         >
    //           Education
    //         </NavDropdown.Item>
    //         <NavDropdown.Item
    //           href="#my-work"
    //           onClick={() => handlePageChange("MyWork")}
    //           className={
    //             currentPage === "My-work" ? "nav-link active" : "nav-link"
    //           }
    //         >
    //           My Work
    //         </NavDropdown.Item>
    //         <NavDropdown.Item
    //           href="#form-section"
    //           onClick={() => handlePageChange("ContactMe")}
    //           className={
    //             currentPage === "Contact-me" ? "nav-link active" : "nav-link"
    //           }
    //         >
    //           Contact Me
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default NavTabs;
