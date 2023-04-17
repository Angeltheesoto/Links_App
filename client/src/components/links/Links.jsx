import React from "react";
import "./links.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Links = ({ title, text, url, brand, uniKey }) => {
  return (
    <div className="linksContainer" key={uniKey}>
      <a href={url} className="linksLink" target="_blank">
        <div className="linksContent">
          <div className="linksBrand">
            {brand === "facebook" ? (
              <FacebookIcon style={{ fontSize: "5rem" }} />
            ) : null}
            {brand === "linkedIn" ? (
              <LinkedInIcon style={{ fontSize: "5rem" }} />
            ) : null}
            {brand === "instagram" ? (
              <InstagramIcon style={{ fontSize: "5rem" }} />
            ) : null}
          </div>
          <div className="linksSecondContainer">
            {title ? (
              <h2 className={!text ? "linksCenterItems" : "linksTitle"}>
                {title}
              </h2>
            ) : null}
            {text ? (
              <p className={!title ? "linksCenterItems" : "linksText"}>
                {text}
              </p>
            ) : null}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Links;
