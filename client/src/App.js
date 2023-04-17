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
import EducationPage from "./views/education/EducationPage";
import WorkPage from "./views/work/WorkPage";
import PortfolioPage from "./views/portfolio/PortfolioPage";
import { AuthContext } from "./context/AuthContext";
import Home from "./views/home/Home";
import Profile from "./views/profile/Profile";

function App() {
  const { user } = useContext(AuthContext);

  // ?fetch data ----------------------->>>>
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [posts, setPosts] = useState([]);

  const dataUrl = [
    "/api-education",
    "/api-work",
    "/api-portfolio",
    "/api-posts",
  ];
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
            axios.spread((res1, res2, res3, res4) => {
              setEducation((prev) => (prev = res1.data));
              setWork((prev) => (prev = res2.data));
              setPortfolio((prev) => (prev = res3.data));
              setPosts((prev) => (prev = res4.data));
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
          <MyNavbar />
          <Container>
            <Routes>
              <Route
                path="/"
                element={user ? <Home postsData={posts} /> : <Register />}
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
                path="/education"
                element={<EducationPage educationData={education} />}
              />
              <Route path="/work" element={<WorkPage workData={work} />} />
              <Route
                path="/portfolio"
                element={<PortfolioPage portfolioData={portfolio} />}
              />
              <Route path="/profile/:username" element={<Profile />} />
            </Routes>
          </Container>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
