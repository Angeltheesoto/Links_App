// dependencies
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
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

function App() {
  // ?fetch data ----------------------->>>>
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  const dataUrl = ["/education", "/work", "/portfolio"];
  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // This fetches data from more than one url
  useEffect(() => {
    let requests = async () => {
      try {
        await axios
          .all(dataUrl.map((promise) => axios.get(promise, config)))
          .then(
            axios.spread((res1, res2, res3) => {
              setEducation((prev) => (prev = res1.data));
              setWork((prev) => (prev = res2.data));
              setPortfolio((prev) => (prev = res3.data));
            })
          );
        // .then(
        //   console.log("education: ", education),
        //   console.log("work: ", work),
        //   console.log("portfolio: ", portfolio)
        // );
      } catch (err) {
        console.log(err);
      }
    };
    requests();
  }, []);

  // ?fetch data ----------------------->>>>
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      {
        <BrowserRouter>
          <MyNavbar />
          <Container>
            <Routes>
              <Route path="/" element={user ? <h1>Home</h1> : <Register />} />
              <Route path="/login" element={user ? <h1>Home</h1> : <Login />} />
              <Route
                path="/register"
                element={user ? <h1>Home</h1> : <Register />}
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
            </Routes>
          </Container>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
