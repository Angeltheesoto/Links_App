import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  let path = location.pathname.split("/");

  return (
    <div
      className={
        path[1] == "register" || path[1] == "login"
          ? "footerHide"
          : "footerContainer"
      }
    >
      <Container>
        <div className="footerLinksContainer">
          <div className="footerLinksPrimaryContainer">
            <div className="footerLinksSingleContainer">
              <h3>Company</h3>
              <a href="#">The HUB Blog</a>
              <a href="#">Engineering Blog</a>
              <a href="#">Marketplace</a>
              <a href="#">What's New</a>
              <a href="#">About</a>
              <a href="#">Press</a>
              <a href="#">Careers</a>
              <a href="#">Social Good</a>
              <a href="#">Contact</a>
            </div>
            <div className="footerLinksSingleContainer">
              <h3>Community</h3>
              <a href="#">HUB Creator Services Program</a>
              <a href="#">HUB for Enterprise</a>
              <a href="#">2022 Creator Report</a>
              <a href="#">Charities</a>
              <a href="#">Creator Profile Directory</a>
              <a href="#">Explore Templates</a>
            </div>
            <div className="footerLinksSingleContainer">
              <h3>Support</h3>
              <a href="#">Help Topics</a>
              <a href="#">Getting Started</a>
              <a href="#">HUB Pro</a>
              <a href="#">Features & How-Tos</a>
              <a href="#">FAQs</a>
              <a href="#">Report a Violation</a>
            </div>
            <div className="footerLinksSingleContainer">
              <h3>Trust & Legal</h3>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Notice</a>
              <a href="#">Cookie Notice</a>
              <a href="#">Trust Center</a>
              <a href="#">Cookie Preferences</a>
            </div>
          </div>
          <div className="footerLinksSecondaryContainer">
            <div className="footerLinksImgContainer">
              <img src="/assets/app_store.svg" alt="SVG Image"></img>
            </div>
            <div className="footerLinksImgContainer">
              <img src="/assets/google_store.svg" alt="SVG Image"></img>
            </div>
            <div className="footerLinksSocialsContainer">
              <FacebookIcon className="muiIcon" />
            </div>
            <div className="footerLinksSocialsContainer">
              <InstagramIcon className="muiIcon" />
            </div>
            <div className="footerLinksSocialsContainer">
              <TwitterIcon className="muiIcon" />
            </div>
            <div className="footerLinksSocialsContainer">
              <YouTubeIcon className="muiIcon" />
            </div>
          </div>
        </div>
      </Container>
      <div className="footerTextContainer">
        <p>&copy; 2023 HUB. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
