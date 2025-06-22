import React from "react";
import "./BottomWearBanner.css";
import banner from '../../assets/Nt-banner1.jpeg'

const BottomWearBanner = () => {
  return (
    <div className="bottomwear-banner">
      <img
        src={banner}
        alt="Bottom Wear"
        className="banner-img"
      />

      <button className="read-more-btn">READ MORE</button>
    </div>
  );
};

export default BottomWearBanner;
