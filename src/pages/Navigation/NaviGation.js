import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.svg";
// Navigation build
const NaviGation = () => {
  const { user, logout } = useAuth();
  const history = useHistory();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{ width: "130px" }} href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>

            {user.email ? (
              <>
                <Nav.Link as={NavLink} to="/destinations">
                  My destinations
                </Nav.Link>
                <Nav.Link as={NavLink} to="/addspot">
                  Add Tour Spot
                </Nav.Link>
                <Nav.Link as={NavLink} to="/dashboared">
                  Dash Boared
                </Nav.Link>

                <span className="mt-2">{user?.displayName}</span>

                <button
                  onClick={() => {
                    logout();
                    history.push("/home");
                  }}
                  className="btn btn-danger"
                >
                  Log out
                </button>
              </>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                Log in
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaviGation;
