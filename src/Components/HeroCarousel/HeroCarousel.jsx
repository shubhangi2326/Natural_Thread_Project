import React from "react";
import { homeBannerSlides } from "../../slides";
import Carousel from "../Carousel/Carousel";

const HeroCarousel = () => {
  return (
    <div>
      <Carousel slides={homeBannerSlides} height="500px" autoplayDelay={4000} />
    </div>
  );
};

export default HeroCarousel;
