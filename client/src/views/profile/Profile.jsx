import React from "react";
import "./profile.css";

const Profile = () => {
  // This gets the username put into the url, it checks if there is a / at the end or not.
  const path = window.location.pathname.split("/");
  const username = path.pop();
  const username2 = path[path.length - 1];
  const checkUsername = () => {
    return username ? username : username2;
  };
  const profileName = checkUsername();

  return (
    <div>
      <h1>Profile of {profileName}</h1>
    </div>
  );
};

export default Profile;
