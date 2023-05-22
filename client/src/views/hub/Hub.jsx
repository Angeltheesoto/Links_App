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
              <button type="submit" className="linksButton hubLinks pink">
                Claim your HUB
              </button>
            </div>
          </form>
        </div>
        <div className="hubSectionOneContainer">
          <img src="/assets/phone.png" alt="phone" />
        </div>
      </section>
      <section className="hubSectionTwo">
        <div className="d-flex flex-row align-items-center">
          <div className="w-50">Image goes here</div>
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
          <div className="w-50">Image goes here</div>
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
          <div className="w-50">Images flipping</div>
        </div>
      </section>
      <section className="hubSectionFive">
        <div className="d-flex flex-column align-items-center justify-content-center w-100 ">
          <h2 className="fw-bold">The only link in bio trused by 35M+</h2>
          <h2 className="text-primary fw-bold">!Text that changes!</h2>
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
