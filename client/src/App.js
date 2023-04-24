// dependencies
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

// components
import { Container } from "react-bootstrap";
import MyNavbar from "./components/nav/Nav";
import Register from "./views/register/Register";
import Login from "./views/login/Login";
import { AuthContext } from "./context/AuthContext";
import Home from "./views/home/Home";
import Profile from "./views/profile/Profile";
import Error from "./components/error/Error";

function App() {
  const { user } = useContext(AuthContext);

  // ?fetch data ----------------------->>>>
  const [posts, setPosts] = useState([]);
  const [profilePic, setProfilePic] = useState([]);

  const dataUrl = ["/api-posts", "/profile-images"];
  let config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (user !== null) {
    config.headers.Authorization = `Token ${user.token}`;
  }

  // This fetches data from more than one url
  useEffect(() => {
    let requests = async () => {
      try {
        await axios
          .all(dataUrl.map((promise) => axios.get(promise, config)))
          .then(
            axios.spread((res1, res2) => {
              setPosts((prev) => (prev = res1.data));
              setProfilePic((prev) => (prev = res2.data));
            })
          );
        // .then(
        //   console.log("education: ", education),
        //   console.log("work: ", work),
        //   console.log("portfolio: ", portfolio),
        //   console.log("posts: ", posts)
        // );
      } catch (err) {
        console.log(err);
      }
    };
    requests();
  }, []);

  // ?fetch data ----------------------->>>>

  return (
    <div className="App">
      {
        <BrowserRouter>
          <MyNavbar profilePictureData={profilePic} />
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  user ? (
                    <Home postsData={posts} profilePictureData={profilePic} />
                  ) : (
                    <Register />
                  )
                }
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route
                path="/register"
                element={user ? <Navigate to="/" /> : <Register />}
              />
              <Route
                path="/profile/:username"
                element={
                  <Profile postsData={posts} profilePictureData={profilePic} />
                }
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </Container>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
