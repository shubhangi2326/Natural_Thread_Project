import React from "react";
import banner from '../assets/Nt-banner1.jpeg'

const BottomWearBanner = () => {
  return (
    <div className="container-fluid my-4 px-0">
        <div className="bottomwear-banner position-relative">
            <img
                src={banner}
                alt="Bottom Wear"
                className="banner-img img-fluid"
            />
            <button className="read-more-btn">READ MORE</button>
        </div>
    </div>
  );
};

export default BottomWearBanner;