import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./PersonalCare.css";
import { PersonalCare_slides } from "../../slides";

const PersonalCare = ({
  autoplayDelay = 3000,
  showNavigation = true,
  showPagination = true,
}) => {
  return (
    <div className="personal-care-section">
      <div className="care-text">
        <h2>
          Personal
          <br />
          Care
        </h2>
      </div>

      <div className="right">
        <div className="care-carousel">
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
            {PersonalCare_slides.map((slide, idx) => (
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

export default PersonalCare;
