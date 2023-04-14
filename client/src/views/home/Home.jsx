import React, { useContext } from "react";
import "./home.css";
import { AuthContext } from "../../context/AuthContext";

const Home = ({ postsData }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(postsData);

  return (
    <div className="HomeContainer">
      <h1>home</h1>
    </div>
  );
};

export default Home;
