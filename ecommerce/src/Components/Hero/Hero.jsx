import React from "react";
import "./hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>NEW</p>
          <img src={hand_icon} alt=""></img>
        </div>
        <p>Collections</p>
        <p>for Everyone</p>

        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow_icon} alt=""></img>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt=""/>

      </div>
    </div>
  );
};

export default Hero;
