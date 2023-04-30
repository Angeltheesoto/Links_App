import React from "react";
import "./links.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import RedditIcon from "@material-ui/icons/Reddit";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkIcon from "@material-ui/icons/Link";

const Links = ({
  title,
  text,
  url,
  brand,
  uniKey,
  editevent,
  deleteevent,
  edit,
  del,
}) => {
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
            {brand === "youtube" ? (
              <YouTubeIcon style={{ fontSize: "5rem" }} />
            ) : null}
            {brand === "twitter" ? (
              <TwitterIcon style={{ fontSize: "5rem" }} />
            ) : null}
            {brand === "github" ? (
              <GitHubIcon style={{ fontSize: "5rem" }} />
            ) : null}
            {brand === "reddit" ? (
              <RedditIcon style={{ fontSize: "5rem" }} />
            ) : null}
            {brand === "pinterest" ? (
              <PinterestIcon style={{ fontSize: "5rem" }} />
            ) : null}
            {brand === "other" ? (
              <LinkIcon style={{ fontSize: "5rem" }} />
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
      <div className="linksBtnContainer">
        {edit ? (
          <button onClick={editevent} className="linksButton edit">
            {edit}
          </button>
        ) : null}
        {del ? (
          <button onClick={deleteevent} className="linksButton del">
            {del}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Links;
