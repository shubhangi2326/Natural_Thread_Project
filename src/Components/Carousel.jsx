import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({
  slides,
  autoplayDelay = 3000,
  showNavigation = true,
  showPagination = true,
}) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        navigation={showNavigation}
        pagination={showPagination ? { clickable: true } : false}
        autoplay={{ delay: autoplayDelay }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.altText || `Slide ${index + 1}`}
              className="carousel-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
