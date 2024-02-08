import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      <header
        className="header"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0px, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8) 100%), url(./landing_page_image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="content">
          <h2 className="title">Unlimited movies, TV shows and more</h2>
          <p className="sub-title">Watch anywhere. Cancel anytime.</p>
          <a href="/explore" className="link">
            Explore
          </a>
        </div>
      </header>

      <div className="fade_from_bottom"></div>

      {/* section 1 */}
      <div className="section">
        <div className="text-box">
          <h1 className="title">Enjoy on your TV</h1>

          <p className="sub-title">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="photo-container">
          <img src="./tv.png" alt="Netflix Shows" className="photo-desktop" />

          <video autoPlay muted loop className="video">
            <source src="./video_in_tv" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* section 2 */}
      <div className="section">
        <div className="photo-container">
          <img
            src="./mobile.jpg"
            alt="Download in Mobile"
            className="photo-2"
          />
        </div>
        <div className="text-box">
          <h1 className="title long-title">
            Download your shows to watch offline
          </h1>

          <p className="sub-title">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>

      {/* section 3 */}
      <div className="section">
        <div className="text-box">
          <h1 className="title">Watch everywhere</h1>

          <p className="sub-title">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="photo-container">
          <img
            src="./device-pile-in.png"
            alt="Multiple Devices"
            className="photo-3"
          />

          <video autoPlay muted loop className="video-2">
            <source
              src="./video-devices-in.m4v"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* section 4 */}
      <div className="section">
        <div className="text-box">
          <h1 className="title">Create profiles for kids</h1>

          <p className="sub-title">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
        <img
          src="./kids.png"
          alt="Kids Content"
          className="photo-4"
        />
      </div>
    </div>
  );
}

export default LandingPage;
