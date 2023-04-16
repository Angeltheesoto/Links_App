import React, { useContext } from "react";
import "./home.css";
import { AuthContext } from "../../context/AuthContext";

const Home = ({ postsData }) => {
  // Will need this to make requests to preform CRUD operations on data.
  const { user } = useContext(AuthContext);
  let username = localStorage.getItem("username");
  // This is removing the quotes around the value in localstorage.
  if (username != null) {
    username = username.replace(/^"(.*)"$/, "$1");
  }

  const filterPosts = postsData.filter(
    (post) => post.author_username === username
  );
  console.log(filterPosts);

  return (
    <div className="HomeContainer">
      <h1>home</h1>
    </div>
  );
};

export default Home;

// When i refresh page and try logging out it bugs out and doesnt let me go to login page
