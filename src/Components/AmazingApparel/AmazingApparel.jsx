import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "./AmazingApparel.css";
import { Apparel_slides } from "../../slides";

const AmazingApparel = ({autoplayDelay = 3000, showNavigation = true, showPagination = true }) => {

  return (
    <div className="amazing-apparel-section">
      <div className="apparel-text">
        <h2>
          Amazing
          <br />
          Apparel
        </h2>
      </div>

      <div className="right">
        <div className="apparel-carousel">
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
            {Apparel_slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={slide.image}
                  alt={`Slide ${idx}`}
                  className="amazing-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AmazingApparel;
