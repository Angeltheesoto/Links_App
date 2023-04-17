import React, { useContext } from "react";
import "./home.css";
import { AuthContext } from "../../context/AuthContext";
import Links from "../../components/links/Links";

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
      <div className="homeProfileContainer">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          className="homeProfileImage"
        />
        <h2 className="homeProfileUsername">{username}</h2>
      </div>
      {!filterPosts
        ? "Loading"
        : filterPosts.map((i) => (
            <Links
              url={i.url}
              title={i.title}
              text={i.text}
              brand={i.brand}
              uniKey={i.id}
            />
          ))}
    </div>
  );
};

export default Home;
