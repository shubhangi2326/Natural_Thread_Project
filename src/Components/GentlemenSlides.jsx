import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gentlemenSlides } from "../slides";

const GentlemenSlides = ({
  autoplayDelay = 3000,
  showNavigation = true,
  showPagination = true,
}) => {
  return (
    <div className="gentlemen-section container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-4 offset-md-1 order-md-2 gentlemen-text mb-4 mb-md-0">
            <h2>
              Gentlemen’s <br />
              Apparel
            </h2>
          </div>

          <div className="col-md-7 order-md-1 right">
            <div className="carousel-wrapper">
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
      </div>
    </div>
  );
};

export default GentlemenSlides;