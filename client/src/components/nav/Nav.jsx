import React, { useContext, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls";
import "./nav.css";
import SearchIcon from "@material-ui/icons/Search";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import { useLocation } from "react-router-dom";

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

  // Checks if the navLinks are hovered over to display sub-links
  const [learnIsOpen, setLearnIsOpen] = useState(false);
  const [discoverIsOpen, setDiscoverIsOpen] = useState(false);

  const location = useLocation();
  let path = location.pathname.split("/");

  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        className={
          path[1] == "register" || path[1] == "login" ? "nav-hide" : ""
        }
      >
        <Container>
          <Link to="/hub" className="nav-link">
            <Navbar.Brand>
              <GroupWorkIcon
                style={{
                  width: "3rem",
                  height: "auto",
                  color: "white",
                  backgroundImage:
                    "linear-gradient(to bottom right, #92fe9d, #00c9ff)",
                  borderRadius: "10px",
                }}
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <React.Fragment>
                <div className="navLinkContainerLeft">
                  <Link to="/" className="nav-link">
                    <Nav>Home</Nav>
                  </Link>
                  <Link to="/about-us" className="nav-link">
                    <Nav>About Us</Nav>
                  </Link>
                  <Link to="/" className="nav-link ">
                    <Nav>Templates</Nav>
                  </Link>
                  <Link
                    to="/"
                    className="nav-link"
                    onMouseEnter={() => setDiscoverIsOpen(!discoverIsOpen)}
                    onMouseLeave={() => setDiscoverIsOpen(!discoverIsOpen)}
                  >
                    <Nav>Discover</Nav>

                    <div
                      className={
                        discoverIsOpen
                          ? "discoverVisible"
                          : "hideOuterContainer"
                      }
                    >
                      <div className="usersContainer discoverContainer">
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>HUB for Instagram</p>
                          </div>
                        </a>
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>HUB for Facebook</p>
                          </div>
                        </a>
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>HUB for Twitter</p>
                          </div>
                        </a>
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>HUB for Youtube</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Link>
                  <Link to="/" className="nav-link">
                    <Nav>Pricing</Nav>
                  </Link>
                  <Link
                    to="/"
                    className="nav-link"
                    onMouseEnter={() => setLearnIsOpen(!learnIsOpen)}
                    onMouseLeave={() => setLearnIsOpen(!learnIsOpen)}
                  >
                    <Nav>Learn</Nav>
                    <div
                      className={
                        learnIsOpen ? "learnVisible " : "hideOuterContainer"
                      }
                    >
                      <div className="usersContainer learnContainer">
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>All Articles</p>
                          </div>
                        </a>
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>Creators</p>
                          </div>
                        </a>
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>Trends</p>
                          </div>
                        </a>
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>Best Prctices</p>
                          </div>
                        </a>
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>Company</p>
                          </div>
                        </a>
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>Product News</p>
                          </div>
                        </a>
                        <a href="#" className="usersLinkP">
                          <div className="usersLink">
                            <p>Help</p>
                          </div>
                        </a>
                      </div>
                    </div>
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

                  {currentUser ? (
                    <Link
                      to={"/login"}
                      style={{
                        textDecoration: "none",
                        width: "fit-content",
                      }}
                    >
                      <div
                        onClick={logOut}
                        className="linksButton linksLogout navButton"
                      >
                        Log out
                      </div>
                    </Link>
                  ) : (
                    <div className="linksLoginSignup">
                      <Link
                        to={"/login"}
                        style={{
                          textDecoration: "none",
                          width: "fit-content",
                        }}
                      >
                        <div className="linksButton logIn navButton">
                          Log in
                        </div>
                      </Link>
                      <Link
                        to={"/register"}
                        style={{
                          textDecoration: "none",
                          width: "fit-content",
                        }}
                      >
                        <div className="linksButton signUp navButton">
                          Sign up
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </React.Fragment>
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
