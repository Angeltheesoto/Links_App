import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls";

function MyNavbar({ user }) {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const logOut = () => {
    logoutCall(dispatch);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="nav-link">
          <Navbar.Brand>HUB</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              <Link to="/education" className="nav-link">
                {" "}
                Education
              </Link>
            </Nav>
            <Link to="/work" className="nav-link">
              <Nav>Work Experience</Nav>
            </Link>
            <Link to="/portfolio" className="nav-link">
              <Nav>Portfolio</Nav>
            </Link>
            {currentUser ? (
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <button onClick={logOut}>
                  <p>Log out</p>
                </button>
              </Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
