import React from "react";
import "./FAQ.css";
import "./Footer";
import Footer from "./Footer";

function FAQ() {
  return (
    <>
      <div className="main" style={{ color: "black !important" }}>
        {/* First Div */}
        <div>
          <h1 className="title">What is Netflix?</h1>

          <img
            src="./faq-1.png"
            alt="Netflix"
            className="photo"
          />

          <p>
            Netflix is a subscription-based{" "}
            <a href="" className="ref_link">
              streaming service
            </a>{" "}
            that allows our members to watch TV shows and movies on an
            internet-connected device.
          </p>
          <p>
            <a href="" className="ref_link">
              Depending on your plan
            </a>
            , you can also{" "}
            <a href="" className="ref_link">
              download TV shows and movies
            </a>{" "}
            to your iOS, Android, or Windows 10 device and watch without an
            internet connection.
          </p>
          <p>
            {" "}
            If you're already a member and would like to learn more about using
            Netflix, visit{" "}
            <a href="" className="ref_link">
              Getting started with Netflix
            </a>
            .
          </p>
        </div>

        <hr />

        {/* Second Div */}
        <div>
          <h2 className="">TV Shows & Movies</h2>

          <img
            src="./faq-2.png"
            alt="netflix"
            className="photo"
          />

          <p>
            Netflix content varies by region and may change over time. You can
            watch a variety of{" "}
            <a href="" className="ref_link">
              award-winning Netflix originals, TV shows, movies, documentaries,
              and more
            </a>
            .{" "}
          </p>

          <p>
            The more you watch, the better Netflix gets at{" "}
            <a href="" className="ref_link">
              recommending
            </a>{" "}
            TV shows and movies.
          </p>
        </div>

        <hr />

        {/* Third Div */}
        <div>
          <h2 className="">Supported Devices</h2>

          <img
            src="./faq-3.png"
            className="photo"
          />

          <p>
            You can watch Netflix through any{" "}
            <a href="" className="ref_link">
              internet-connected device
            </a>{" "}
            that offers the Netflix app, including smart TVs, game consoles,
            streaming media players, set-top boxes, smartphones, and tablets.
            You can also watch Netflix on your computer using an internet
            browser. You can review the{" "}
            <a href="" className="ref_link">
              system requirements
            </a>{" "}
            for web browser compatibility, and check our{" "}
            <a href="" className="ref_link">
              internet speed recommendations
            </a>{" "}
            to achieve the best performance.
          </p>

          <p>
            Need help getting set up? Search our{" "}
            <a href="" className="ref_link">
              Help Center
            </a>{" "}
            for the manufacturer of the device you're using.
          </p>
        </div>

        <hr />

        {/* Fourth Div */}
        <div>
          <h2 className="">Plans and Pricing</h2>

          <img
            src="./faq-4.png"
            className="photo"
          />

          <p>
            Each{" "}
            <a href="" className="ref_link">
              Netflix plan
            </a>{" "}
            determines the number of devices you can watch Netflix on at the
            same time and whether you can watch in High Definition (HD), Full
            High Definition (FHD), or Ultra High Definition (UHD).
          </p>

          <p>
            You can{" "}
            <a href="" className="ref_link">
              change your plan
            </a>{" "}
            or{" "}
            <a href="" className="ref_link">
              cancel
            </a>{" "}
            online at any time.
          </p>
        </div>

        <hr />

        {/* Fifth Div */}
        <div>
          <h2 className="">Get Started</h2>

          <img
            src="./faq-5.png"
            className="photo"
          />

          <p>To start watching Netflix:</p>

          <p>
            <ol>
              <li>
                Visit{" "}
                <a href="" className="ref_link">
                  netflix.com/signup
                </a>
                .
              </li>
              <li>
                <a href="" className="ref_link">
                  Choose a plan
                </a>
                .
              </li>
              <li>
                Create an account by entering your email address and creating a
                password.
              </li>
              <li>
                Enter a{" "}
                <a href="" className="ref_link">
                  payment method
                </a>
                .
              </li>
            </ol>
          </p>

          <p>
            As a Netflix member, you are charged once a month on the date you
            signed up.
          </p>
        </div>

        <hr />

        <div className="feedback_1">
          <h4>Was this article helpful?</h4>
          <a href="">Yes</a>
          <a href="">No</a>
        </div>

        <hr />

        <div className="feedback_2">
          <h3>Need more help?</h3>

          <a href="" className="button">
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FAQ;
