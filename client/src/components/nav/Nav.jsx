import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls";
import "./nav.css";

function MyNavbar({ user }) {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const logOut = () => {
    logoutCall(dispatch);
    if (localStorage.getItem("username")) {
      localStorage.setItem("username", null);
    }
  };

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Link to="/" className="nav-link ">
          <Navbar.Brand>HUB</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {currentUser ? (
              <React.Fragment>
                <div className="navLinkContainerLeft">
                  <Link to="/" className="nav-link">
                    <Nav>Home</Nav>
                  </Link>
                  <Link to="/" className="nav-link">
                    <Nav>Home</Nav>
                  </Link>
                </div>
                <div className="navLinkContainerRight">
                  <Link
                    to={"/register"}
                    style={{
                      textDecoration: "none",
                      width: "fit-content",
                    }}
                  >
                    <div onClick={logOut} className="linksButton del navButton">
                      Log out
                    </div>
                  </Link>
                </div>
              </React.Fragment>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
