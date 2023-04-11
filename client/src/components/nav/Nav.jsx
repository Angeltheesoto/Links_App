import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
