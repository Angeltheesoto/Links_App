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
    if (!localStorage.getItem("username")) {
      localStorage.setItem("username", JSON.stringify(username.current.value));
    } else {
      localStorage.setItem("username", JSON.stringify(username.current.value));
    }
  };

  return (
    <div className="registerContainer">
      <form className="registerForm" onSubmit={handleClick}>
        <div className="registerFormContainer">
          <h1 className="registerHeading">Log In</h1>
          <div className="labelContainer">
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
              <label for="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="floatingInput2"
                type="password"
                name="password"
                placeholder="password"
                ref={password}
                required
              />
              <label for="floatingInput2">Password</label>
            </div>

            <div className="registerBtnContainer">
              <button
                type="submit"
                disabled={isFetching}
                className="registerBtn"
              >
                {isFetching ? "Loading.." : "Log In"}
              </button>
              <div className="registerBtnSecondContainer">
                <p className="registerText">Need an account?</p>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    height: "fit-content",
                  }}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
