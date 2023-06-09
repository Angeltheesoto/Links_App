import React, { useEffect, useState } from "react";
import "./hub.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

const Hub = () => {
  let [showOutline, setShowOutline] = useState(false);
  let [flipCardOne, setFlipCardOne] = useState(false);
  let [flipCardTwo, setFlipCardTwo] = useState(false);
  let [flipCardThree, setFlipCardThree] = useState(false);
  let [flipCardFour, setFlipCardFour] = useState(false);

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
          <form className="d-flex flex-row align-items-center">
            <div
              className={
                showOutline
                  ? "hubSectionOneLinkOutlineGrow"
                  : "hubSectionOneLinkOutlineShrink"
              }
            >
              <div className="hubSectionOneLabel">
                <label>HUB/</label>
                <input
                  type="text"
                  placeholder="yourname"
                  onFocus={() => setShowOutline(!showOutline)}
                  onBlur={() => setShowOutline(!showOutline)}
                ></input>
              </div>
            </div>
            <div>
              <button type="submit" className="linksButton hubLinks pink">
                Claim your HUB
              </button>
            </div>
          </form>
        </div>
        <div className="hubSectionOneContainer d-flex flex-row align-items-center justify-content-center hubRelativeContainer">
          <div className="hubSectionOneHat">Hat image</div>
          <div className="hubSectionOnePhone">
            <div className="hubSectionOneProfile"></div>
            <span>Avery Clothing</span>
            <span>Utilitarian garments for the everyday</span>
            <div className="h-50">
              <p className="hubSectionOneLinks">Autumn Collection</p>
              <p className="hubSectionOneLinks">Latest additons</p>
              <p className="hubSectionOneLinks">Podcast</p>
            </div>
          </div>

          <div className="hubSectionOneShopAll">
            <p>Shop all</p>
          </div>

          <div className="hubSectionOneBrand">
            <div>
              <FacebookIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <TwitterIcon />
            </div>
          </div>
        </div>
      </section>
      <section className="hubSectionTwo">
        <div className="d-flex flex-row align-items-center">
          {/* <div className="w-50">Image goes here</div> */}
          <div className="hubSectionOneContainer d-flex flex-row align-items-center justify-content-center hubRelativeContainer h-100">
            <div className="hubSectionOnePhone">
              <div className="hubSectionOneProfile"></div>
              <span>Avery Clothing</span>
              <span>Utilitarian garments for the everyday</span>
              <div className="h-50">
                <p className="hubSectionOneLinks">Autumn Collection</p>
                <p className="hubSectionOneLinks">Latest additons</p>
                <p className="hubSectionOneLinks">Podcast</p>
              </div>
            </div>

            <div className="hubSectionOneShopAllTwo">
              <p>Shop all</p>
            </div>

            <div className="hubSectionOneBrandTwo">
              <div>
                <FacebookIcon />
              </div>
              <div>
                <InstagramIcon />
              </div>
              <div>
                <TwitterIcon />
              </div>
            </div>
          </div>
          <div className="w-50">
            <h2 className="fw-bold mb-4">
              Create and customize your HUB in minutes
            </h2>
            <p className="fs-5 mb-5">
              Connect your TikTok, Instagram, Twitter, website, store, videos,
              music, podcast, events and more. It all comes together in a link
              in bio landing page designed to convert.
            </p>
            <button className="linksButton hubLinks pink mt-5">
              Get started for free
            </button>
          </div>
        </div>
      </section>
      <section className="hubSectionThree">
        <div className="d-flex flex-row align-items-center">
          <div className="w-50">
            <h2 className="fw-bold mb-4">
              Share your HUB from your Instagram, TikTok, Twitter and other bios
            </h2>
            <p className="fs-5 mb-5">
              Add your unique HUB URL to all the platforms and places you find
              your audience. Then use your QR code to drive your offline traffic
              online.
            </p>
            <button className="linksButton hubLinks pink mt-5">
              Get started for free
            </button>
          </div>
          <div className="w-50">
            <div className="hubSectionThreeCatepillerContainer">
              <div>
                <div className="hubSectionThreeCatepiller">6</div>
                <div className="hubSectionThreeCatepiller">5</div>
                <div className="hubSectionThreeCatepiller">4</div>
                <div className="hubSectionThreeCatepiller">3</div>
                <div className="hubSectionThreeCatepiller">2</div>
                <div className="hubSectionThreeCatepiller">1</div>
              </div>
              <p>
                <GroupWorkIcon />
                HUB/shopavery
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hubSectionFour">
        <div className="d-flex flex-row-reverse align-items-center">
          <div className="w-50">
            <h2 className="fw-bold mb-4">
              Analyze your audience and keep your followers engaged
            </h2>
            <p className="fs-5 mb-5">
              Track your engagement over time, monitor revenue and learn what's
              converting your audience. Make informed updates on the fly to keep
              them coming back.
            </p>
            <button className="linksButton hubLinks pink mt-5">
              Get started for free
            </button>
          </div>
          <div className="w-50">
            <div className="hubSectionFourCardContainer">
              <div class={`flip-card ${flipCardOne ? "flipping-card" : ""}`}>
                <div
                  class="flip-card-front"
                  onClick={() => setFlipCardOne(!flipCardOne)}
                >
                  <p>Click to flip</p>
                </div>

                <div
                  class="flip-card-back"
                  onClick={() => setFlipCardOne(!flipCardOne)}
                >
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>

              <div class={`flip-card ${flipCardTwo ? "flipping-card" : ""}`}>
                <div
                  class="flip-card-front"
                  onClick={() => setFlipCardTwo(!flipCardTwo)}
                >
                  <p>Click to flip</p>
                </div>

                <div
                  class="flip-card-back"
                  onClick={() => setFlipCardTwo(!flipCardTwo)}
                >
                  <h1>John Doe</h1>
                </div>
              </div>

              <div class={`flip-card ${flipCardThree ? "flipping-card" : ""}`}>
                <div
                  class="flip-card-front"
                  onClick={() => setFlipCardThree(!flipCardThree)}
                >
                  <p>Click to flip</p>
                </div>

                <div
                  class="flip-card-back"
                  onClick={() => setFlipCardThree(!flipCardThree)}
                >
                  <h1>John Doe</h1>
                </div>
              </div>

              <div class={`flip-card ${flipCardFour ? "flipping-card" : ""}`}>
                <div
                  class="flip-card-front"
                  onClick={() => setFlipCardFour(!flipCardFour)}
                >
                  <p>Click to flip</p>
                </div>

                <div
                  class="flip-card-back"
                  onClick={() => setFlipCardFour(!flipCardFour)}
                >
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hubSectionFive">
        <div className="d-flex flex-column align-items-center justify-content-center w-100 ">
          <h2 className="fw-bold hubSectionFivePrimary">
            The only link in bio trused by 35M+
          </h2>
          <div className="hubSectionFiveSlidingContainer">
            <div className="hubSectionFiveSlidingTextContainer">
              <h2 className="text-primary fw-bold">Text heading 1</h2>
              <h2 className="text-primary fw-bold">Text heading 2</h2>
              <h2 className="text-primary fw-bold">Text heading 3</h2>
              <h2 className="text-primary fw-bold">Text heading 4</h2>
            </div>
          </div>
          <div className="hubSectionFiveSlidingContainerTwo">
            <div className="hubSectionFiveSlidingContainerForUsers">
              {" "}
              <div className="hubSectionFiveSlidingUserContainer">
                Person 1
              </div>{" "}
              <div className="hubSectionFiveSlidingUserContainer">Person 2</div>
              <div className="hubSectionFiveSlidingUserContainer">Person 3</div>
              <div className="hubSectionFiveSlidingUserContainer">Person 4</div>
              <div className="hubSectionFiveSlidingUserContainer">Person 5</div>
              <div className="hubSectionFiveSlidingUserContainer">Person 6</div>
            </div>
            <div className="hubSectionFiveSlidingContainerForUsers">
              {" "}
              <div className="hubSectionFiveSlidingUserContainer">
                Person 1
              </div>{" "}
              <div className="hubSectionFiveSlidingUserContainer">Person 2</div>
              <div className="hubSectionFiveSlidingUserContainer">Person 3</div>
              <div className="hubSectionFiveSlidingUserContainer">Person 4</div>
              <div className="hubSectionFiveSlidingUserContainer">Person 5</div>
              <div className="hubSectionFiveSlidingUserContainer">Person 6</div>
            </div>
          </div>
          {/* <div class="marquee">
            <div class="marquee--inner">
              <span>
                <div class="orb"></div>
                <div class="orb red"></div>
                <div class="orb yellow"></div>
                <div class="orb blue"></div>
                <div class="orb orange"></div>
                <div class="orb purple"></div>
                <div class="orb green"></div>
                <div class="orb"></div>
              </span>
              <span>
                <div class="orb"></div>
                <div class="orb red"></div>
                <div class="orb yellow"></div>
                <div class="orb blue"></div>
                <div class="orb orange"></div>
                <div class="orb purple"></div>
                <div class="orb green"></div>
                <div class="orb"></div>
              </span>
            </div>
          </div> */}
        </div>
      </section>
      <section className="hubSectionSix">
        <div className="d-flex flex-row align-items-center justify-content-end w-100">
          <div className="w-50 h-100 d-flex flex-column justify-content-between">
            <div className="bg-white p-5 rounded-5 hubSectionSixPrimary">
              <p className="h-50">Image goes here</p>
              <div className="h-50 d-flex flex-column justify-content-end">
                <a href="#">
                  <h3 className="fw-bold">
                    Share your content in limitless ways on your Linktree.
                  </h3>
                </a>
              </div>
            </div>
            <div className="bg-white p-5 rounded-5 hubSectionSixPrimary">
              <p className="h-50">Image goes here</p>
              <div className="h-50 d-flex flex-column justify-content-end">
                <a href="#">
                  <h3 className="fw-bold">
                    Sell products and collect payments. It's monetization made
                    simple.
                  </h3>
                </a>
              </div>
            </div>
          </div>
          <div className="w-50 h-100 bg-white p-5 p-10 ms-5 rounded-5">
            <p className="h-50 w-100">Image goes here</p>
            <div className="h-50 d-flex flex-column justify-content-end">
              <a href="#">
                <h3 className="fw-bold">
                  Grow, own and engage your audience by unifying them in one
                  place.
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="hubSectionSeven pt-5">
        <div className="d-flex w-100 flex-column mt-5">
          <div className="d-flex flex-column justify-content-center align-items-center mb-5">
            <h2 className="fw-bold">
              The fast, friendly and powerful link in bio tool.
            </h2>
            <button className="linksButton hubLinks pink mt-5 ">
              Explore all plans
            </button>
          </div>
          <div className="d-flex w-100 h-100 flex-row justify-content-between mt-5">
            <div className=" h-75 bg-white p-5 rounded-5 hubSectionSevenPrimary">
              <p className="h-50">Image goes here</p>
              <p className="fs-5 mt-5">
                Seamlessly connect your Linktree with the tools you already use.
              </p>
            </div>
            <div className=" h-75 bg-white p-5 rounded-5 hubSectionSevenPrimary">
              <p className="h-50">Image goes here</p>
              <p className="fs-5 mt-5">
                Customize your Linktree to match your brand. Make it feel like
                you.
              </p>
            </div>
            <div className=" h-75 bg-white p-5 rounded-5 hubSectionSevenPrimary">
              <p className="h-50">Image goes here</p>
              <p className="fs-5 mt-5">
                Manage, update and schedule content with our quick, easy editor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hubSectionEight">
        <div className="d-flex flex-column justify-content-center align-items-center w-100">
          <h2 className="fw-bold">As featured in...</h2>
          <div className="d-flex flex-row mt-5">
            <p className="bg-white rounded-5 px-5 py-4 w-5 me-4">Brand</p>
            <p className="bg-white rounded-5 px-5 py-4 w-5 me-4">Brand</p>
            <p className="bg-white rounded-5 px-5 py-4 w-5 me-4">Brand</p>
            <p className="bg-white rounded-5 px-5 py-4 w-5 me-4">Brand</p>
            <p className="bg-white rounded-5 px-5 py-4 w-5 me-4">Brand</p>
          </div>
        </div>
      </section>
      <section className="hubSectionNine">
        <div>
          <p className="h-50 d-flex flex-row align-items-center justify-content-center">
            Images slide left and right in a circle
          </p>
          <div className="d-flex flex-column align-items-center justify-content-center mx-5">
            <h2 className="fw-bold text-center">
              "HUB helps my customers get where they need to go. It's so fast
              and easy."
            </h2>
            <span className="fw-bold text-muted fs-4">Patti Chimkire,</span>
            <span className="fw-bold text-muted fs-4">
              Founder and Pastry Chef, Mali Bakes
            </span>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center mt-5">
            <button className="p-3 fw-bolder me-3 rounded-3">{`<`}</button>
            <button className="p-3 fw-bolder rounded-3">{`>`}</button>
          </div>
        </div>
      </section>
      <section className="hubSectionTen">
        <div className="d-flex flex-column align-items-center justify-content-center ">
          <h2 className="mb-5">Got questions?</h2>
          <div className="bg-white rounded-4 p-5 w-50 mb-4">
            <div className="d-flex flex-row align-items-center justify-content-center mb-5">
              <h3 className="me-5">Why do i need a link in bio tool?</h3>
              <button>v</button>
            </div>
            <div>
              <p>
                Right now, every time you've got something new to share, you
                have to go to every single one of your channels to change the
                link in each of your bios. It's time-consuming and complicated -
                making it so much harder to keep everything up to date.
              </p>
              <p>
                A link in bio tool means you never have to compromise, or remove
                one link from your bio so you can add another. You can keep
                everything you want to share online in one link. When you've got
                a change, you only ever have to make it once.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-4 p-5 w-50 mb-4">
            <div className="d-flex flex-row align-items-center justify-content-center mb-5">
              <h3 className="me-5">Why do i need a link in bio tool?</h3>
              <button>v</button>
            </div>
            <div>
              <p>
                Right now, every time you've got something new to share, you
                have to go to every single one of your channels to change the
                link in each of your bios. It's time-consuming and complicated -
                making it so much harder to keep everything up to date.
              </p>
              <p>
                A link in bio tool means you never have to compromise, or remove
                one link from your bio so you can add another. You can keep
                everything you want to share online in one link. When you've got
                a change, you only ever have to make it once.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hub;
