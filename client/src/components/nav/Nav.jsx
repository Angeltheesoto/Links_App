import React, { useContext, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls";
import "./nav.css";
import SearchIcon from "@material-ui/icons/Search";

function MyNavbar({ user, profilePictureData }) {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const logOut = () => {
    logoutCall(dispatch);
    if (localStorage.getItem("username")) {
      localStorage.setItem("username", null);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const history = useNavigate();
  const handleSearch = () => {
    setIsOpen(!isOpen);
    setSearchQuery("");
  };
  const handleReload = (username) => {
    setIsOpen(!isOpen);
    setSearchQuery("");
    // window.location.reload();
    history.push(`/profile/${username}`);
  };

  return (
    <>
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
                    <Link to="/about-us" className="nav-link">
                      <Nav>About Us</Nav>
                    </Link>
                  </div>
                  <div className="navLinkContainerRight">
                    <div className="navSearchContainer">
                      <SearchIcon
                        className="searchIcon"
                        style={{
                          fontSize: "2rem",
                        }}
                        onClick={handleSearch}
                      />
                      <input
                        type="text"
                        placeholder="Search user..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={
                          isOpen ? "searchBar" : "searchBar closeSearchBar"
                        }
                      />
                    </div>

                    <Link
                      to={"/register"}
                      style={{
                        textDecoration: "none",
                        width: "fit-content",
                      }}
                    >
                      <div
                        onClick={logOut}
                        className="linksButton del navButton"
                      >
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
      <Container className={isOpen ? "outerContainer" : "hideOuterContainer"}>
        <div className="usersContainer">
          {!searchQuery ? (
            <p className="usersSearchingDefaultText">search for a user</p>
          ) : (
            profilePictureData &&
            profilePictureData
              .filter((filteredPic) =>
                filteredPic.author_username
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
              .map((e) => (
                <Link
                  to={`/profile/${e.author_username}`}
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    color: "black",
                  }}
                  onClick={() => handleReload(e.author_username)}
                  key={e.id}
                >
                  <div className="usersLink">
                    <img src={e.image} alt="profile image" />
                    <p>{e.author_username}</p>
                  </div>
                </Link>
              ))
          )}
        </div>
      </Container>
    </>
  );
}

export default MyNavbar;
