import React from "react";
import "./FashionShowcase.css";
import image from "../../assets/image_one.jpeg";

const FashionShowcase = () => {
  return (
    <div className="fashion-showcase">
      <div className="content-wrapper">
        <div className="image-container">
          <img
            src={image}
            alt="Hand holding fabric"
            className="responsive-img"
          />
        </div>
        <div className="video-container">
          <iframe
            width="695"
            height="391"
            src="https://www.youtube.com/embed/Vt2ifIxk4Gs"
            title="nature thead lucknow chikankari work"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          ;
        </div>
      </div>
    </div>
  );
};

export default FashionShowcase;
