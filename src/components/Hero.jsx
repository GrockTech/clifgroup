import React, { useRef } from "react";
import HeroImage from "../heroimage.jpg";

import bg from "../assets/bg1.jpg";
//import OtherP from "./OtherP";
//import Autoslide from "./Autoslide";
//import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";
//import { Link } from "react-router-dom";
//import ShipmentMedia from "./Shipmentmedia";

// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";

const Hero = () => {
  // const navigate = useNavigate();
  const typewriterRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setAnimate(false); // Reset
  //         requestAnimationFrame(() => {
  //           void typewriterRef.current.offsetWidth; // Reflow
  //           setTimeout(() => setAnimate(true), 50); // Delay re-trigger
  //         });
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   const element = typewriterRef.current;
  //   if (element) observer.observe(element);

  //   return () => {
  //     if (element) observer.unobserve(element);
  //   };
  // }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(false); // reset class
        setTimeout(() => setAnimate(true), 10); // short delay to re-trigger
      }
    },
    { threshold: 0.5 }
  );

  const element = typewriterRef.current;
  if (element) observer.observe(element);

  return () => {
    if (element) observer.unobserve(element);
  };
}, []);
  return (
    <div
      className=" container text-white text-center mb-8 "
      id="view"
      style={{
        background: `url(${bg}) no-repeat center center`,
        backgroundSize: "cover",
        height: "60vh",
      }}
    >
      <section className=" text-light pt - 5 mt-5 p-5 text-center  text-sm-start" id="home">
        <div id="movehero" className="container mt-n3">
          {/* Flexbox for text and image side by side on medium+ screens */}
          <div className="d-sm-flex ms-0 align-items-center justify-content-between">
            <div className="mb-4 mb-sm-0">
              {" "}
              {/* Adds bottom margin only on mobile */}
              <h1
                ref={typewriterRef}
                className={`typewriter ${animate ? "animate" : ""} mb-3`}
              >
                Your Logistics{" "}
                <span className="text-warning">
                  {" "}
                  & <br /> Growth Partner
                </span>
              </h1>
              <p className={`lead ${animate ? "animate-delay" : ""} mt-3`}>
                {" "}
                {/* Adds spacing above paragraph */}
                Cliffpalm Group — Driving Excellence Across Industries
              </p>
              <button
                onClick={() => {
                  const section = document.getElementById("service");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn bg-black text-white btn-lg my-2 hover-effect"
              >
                <a className="nav-link" href="#product">Explore </a>
                {/* <Link to="/aboutus" className="nav-link"/> */}
              </button>
            </div>

            {/* Right Side: Hero Image, hidden on extra small screens */}
            <img
              className="img-fluid w-50 px-5 d-none d-sm-block"
              src={HeroImage}
              alt="Young person coding on a laptop"
            />
          </div>
        </div>
      </section>

      {/* <div id="givespace"></div> */}
      {/* <Track/> */}
       </div>
  );
};

export default Hero;
