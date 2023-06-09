import React, { useContext, useRef } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      // confirmPassword.current.setCustomValidity("Passwords don't match!");
      return alert("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/api/register/", user);
        loginCall(
          {
            username: username.current.value,
            password: password.current.value,
          },
          dispatch
        );
        if (!localStorage.getItem("username")) {
          localStorage.setItem(
            "username",
            JSON.stringify(username.current.value)
          );
        } else {
          localStorage.setItem(
            "username",
            JSON.stringify(username.current.value)
          );
        }

        // navigate("/login");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerLogoContainer">
        <Link to="/hub" className="nav-link">
          <h1 className="registerLogoTitle">HUB</h1>
        </Link>
        <p className="registerLogoText">The safest place for all your links.</p>
      </div>
      <form className="registerForm" onSubmit={handleClick}>
        <div className="registerFormContainer">
          <h1 className="registerHeading">Register</h1>
          <div className="labelContainer ">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput"
                type="text"
                name="username"
                placeholder="username"
                ref={username}
                required
              />
              <label for="floatingInput">username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput2"
                type="text"
                name="email"
                placeholder="email"
                ref={email}
                required
              />
              <label for="floatingInput2">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput3"
                type="password"
                name="password"
                placeholder="password"
                ref={password}
                required
              />
              <label for="floatingInput3">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput4"
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                ref={confirmPassword}
                required
              />
              <label for="floatingInput4">Confirm Password</label>
            </div>
            <div className="registerBtnContainer">
              <button
                type="submit"
                disabled={isFetching}
                className="registerBtn"
              >
                {isFetching ? "Loading.." : "Register"}
              </button>
              <div className="registerBtnSecondContainer">
                <p className="registerText">Have an account?</p>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    height: "fit-content",
                  }}
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
