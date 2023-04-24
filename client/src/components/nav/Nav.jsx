import React, { useContext, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  // const filteredData = profilePictureData.filter((item) =>
  //   item.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handleSearch = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);
  };
  console.log(searchQuery);

  let profilePic = profilePictureData.filter(
    (pic) => pic.author_username == searchQuery
  );
  console.log(profilePictureData);

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
                    <Link to="/" className="nav-link">
                      <Nav>Home</Nav>
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
                    {/* <Link to="" className="nav-link">
            </Link> */}

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
          {profilePictureData?.map((e) => (
            <div className="usersLink">
              <img src={e.image} />
              <p>{e.author_username}</p>
            </div>
          ))}
          {/* <img
              src={
                !profilePic || profilePic.length === 0
                  ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  : profilePic[0].image
              }
            />
            <p>
              {!profilePic || profilePic.length === 0
                ? "name"
                : profilePic[0].author_username}
            </p> */}
        </div>
      </Container>
    </>
  );
}

export default MyNavbar;
