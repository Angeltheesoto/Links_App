import React from "react";
import "./hub.css";

const Hub = () => {
  return (
    <div className="hubContainer">
      <section className="hubSectionOne">
        <div className="hubSectionOneContainer">
          <h1>Everything you are. In one, simple link in bio.</h1>
          <p>
            Join 35M+ people using HUB for their link in bio. One link to help
            you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <form>
            <div className="hubSectionOneLabel">
              <label>HUB/</label>
              <input type="text" placeholder="yourname"></input>
            </div>
            <div>
              <button type="submit" className="linksButton sand">
                Claim your HUB
              </button>
            </div>
          </form>
        </div>
        <div className="hubSectionOneContainer">
          <img src="/assets/phone.png" alt="phone" />
        </div>
      </section>
      <section className="hubSectionTwo">section 2</section>
      <section className="hubSectionThree">section 3</section>
      <section className="hubSectionFour">section 4</section>
      <section className="hubSectionFive">section 5</section>
      <section className="hubSectionSix">section 6</section>
      <section className="hubSectionOSeven">section 7</section>
      <section className="hubSectionEight">section 8</section>
      <section className="hubSectionNine">section 9</section>
      <section className="hubSectionTen">section 10</section>
    </div>
  );
};

export default Hub;
