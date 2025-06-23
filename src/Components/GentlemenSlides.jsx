import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { gentlemenSlides } from "../slides";

const GentlemenSlides = ({
  autoplayDelay = 3000,
  showNavigation = true,
  showPagination = true,
}) => {
  return (
    <div className="gentlemen-section">
      <div className="gentlemen-text">
        <h2>
          Gentlemen’s <br />
          Apparel
        </h2>
      </div>

      <div className="right">
        <div className="carousel-wrapper">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            navigation={showNavigation}
            pagination={showPagination ? { clickable: true } : false}
            autoplay={{ delay: autoplayDelay }}
            className="mySwiper"
          >
            {gentlemenSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={slide.image}
                  alt={`Slide ${idx}`}
                  className="personal-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default GentlemenSlides;
