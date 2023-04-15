import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { AuthContext } from "../../context/AuthContext";

const Home = ({ postsData }) => {
  // Will need this to make requests to preform CRUD operations on data.
  const { user } = useContext(AuthContext);

  const filterPosts = postsData.filter(
    (post) => post.author_username === "test4"
  );
  console.log(filterPosts);

  return (
    <div className="HomeContainer">
      <h1>home</h1>
    </div>
  );
};

export default Home;
