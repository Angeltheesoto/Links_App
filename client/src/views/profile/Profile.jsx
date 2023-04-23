import React, { useState, useEffect } from "react";
import "./profile.css";
import Links from "../../components/links/Links";
import Error from "../../components/error/Error";

const Profile = ({ postsData, profilePictureData }) => {
  // This gets the username put into the url, it checks if there is a / at the end or not.
  const path = window.location.pathname.split("/");
  const username = path.pop();
  const username2 = path[path.length - 1];
  const checkUsername = () => {
    return username ? username : username2;
  };
  const profileName = checkUsername();

  const filterPosts = postsData.filter(
    (post) => post.author_username === profileName
  );

  // Checks if username exists in database
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    fetch(`/api-users/${profileName}/exists/`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("User not found");
        }
      })
      .then((data) => {
        setIsUser(data.exists);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [profileName]);

  let profilePic = profilePictureData.filter(
    (pic) => pic.author_username == profileName
  );
  console.log(profilePic);

  return (
    <div>
      {isUser ? (
        <>
          <div className="homeProfileContainer">
            <img
              src={
                !profilePic[0].image
                  ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  : profilePic[0].image
              }
              className="homeProfileImage"
            />
            <h2 className="homeProfileUsername">{profileName}</h2>
          </div>
          {filterPosts?.map((i) =>
            i ? (
              <Links
                url={i.url}
                title={i.title}
                text={i.content}
                brand={i.brand}
                uniKey={i.id}
              />
            ) : (
              <h1>Loading...</h1>
            )
          )}
        </>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Profile;
