import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PersonalCare_slides } from "../slides";

const PersonalCare = ({
  autoplayDelay = 3000,
  showNavigation = true,
  showPagination = true,
}) => {
  return (
    <div className="personal-care-section container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 care-text ps-md-4 mb-4 mb-md-0">
            <h2>
              Personal
              <br />
              Care
            </h2>
          </div>

          <div className="col-md-9 right">
            <div className="care-carousel">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                navigation={showNavigation}
                pagination={showPagination ? { clickable: true } : false}
                autoplay={{ delay: autoplayDelay }}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
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
      </div>
    </div>
  );
};

export default PersonalCare;