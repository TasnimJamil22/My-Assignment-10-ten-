import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.config";
import logo from "../../Images/logo3.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <div className="mb-3 pb-5">
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} style={{ height: "50px" }} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/professionals">
                Professionals
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              {/* <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/services/3.1">
                  Psychological Counseling
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/3.2">
                  Spiritual wellness
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/3.3">
                  Parenting
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/3.4">
                  Anger Management
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/3.5">
                  Relationship Management
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/3.6">
                  Communication Skill
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/3.7">
                  Think Positive
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/services/3.8">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
            
              {user ? (
                <>
                <Nav.Link as={Link} to="/cart" className="mx-3"><FontAwesomeIcon icon={faShoppingCart}/> </Nav.Link>
                   <div className="my-auto text-primary fw-bold">
                        {user.email} 
                  <button 
                    className="btn btn-sm btn-light text-secondary rounded-3 mx-2"
                    style={{ backgroundColor: "#D3D5FD" }}
                    onClick={()=>signOut(auth)}>
                    Sign Out
                  </button>
                  
                   </div>
                </>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
              )}
              {user ? (
                <></>
              ) : (
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
