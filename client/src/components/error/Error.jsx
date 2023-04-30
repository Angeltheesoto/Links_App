import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <div className="error404Container">
      <h1 className="error404Heading">Error 404</h1>
      <p className="error404Text">Page not found</p>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          height: "fit-content",
          color: "white",
          fontSize: "2rem",
          borderBottom: "3px solid red",
        }}
      >
        Go back home
      </Link>
    </div>
  );
};

export default Error;
