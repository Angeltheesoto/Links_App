import React, { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";

function Login() {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { username: username.current.value, password: password.current.value },
      dispatch
    );
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
            Password :
            <input
              type="password"
              name="password"
              placeholder="password"
              ref={password}
              required
            />
          </label>
          <button type="submit" disabled={isFetching}>
            {isFetching ? "Loading.." : "Log In"}
          </button>
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              width: "60%",
              alignSelf: "center",
            }}
          >
            <button className="loginRegisterButton">Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
