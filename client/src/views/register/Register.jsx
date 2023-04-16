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
      <form className="registerForm" onSubmit={handleClick}>
        <div className="labelContainer">
          <label>
            Username :
            <input
              type="text"
              name="username"
              placeholder="username"
              ref={username}
              required
            />
          </label>
          <label>
            Email :
            <input
              type="text"
              name="email"
              placeholder="email"
              ref={email}
              required
            />
          </label>
          <label>
            Password :
            <input
              type="password"
              name="password"
              placeholder="password"
              ref={password}
              required
            />
          </label>
          <label>
            Confirm Password :
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              ref={confirmPassword}
              required
            />
          </label>
          <button type="submit" disabled={isFetching}>
            {isFetching ? "Loading.." : "Create Account"}
          </button>
          {/* <button type="submit">Create Account</button> */}
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              width: "60%",
              alignSelf: "center",
            }}
          >
            <button className="loginRegisterButton">Log In</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
