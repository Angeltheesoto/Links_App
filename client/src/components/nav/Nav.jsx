import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls";
import "./nav.css";

function MyNavbar({ user }) {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const logOut = () => {
    if (localStorage.getItem("username")) {
      localStorage.setItem("username", null);
    }
    logoutCall(dispatch);
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
            <Link to="/portfolio" className="nav-link">
              <Nav>Portfolio</Nav>
            </Link>
            {currentUser ? (
              <Link
                to={"/login"}
                style={{ textDecoration: "none", width: "6rem" }}
              >
                <div onClick={logOut} className="linksButton del">
                  Log out
                </div>
              </Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
