import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import droga_home from "../../img/droga_home.png";
import droga_carr from "../../img/droga_carr.png";
import droga_job from "../../img/droga_job.png";
import droga_erp_1 from "../../img/droga_erp_1.png";

import droga_erp_2 from "../../img/droga_erp_2.png";
import droga_erp_3 from "../../img/droga_erp_3.png";
import swift_1 from "../../img/swift_1.png";
import swift_2 from "../../img/swift_2.png";
import swift_3 from "../../img/swift_3.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={droga_home} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={droga_erp_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={droga_carr} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={droga_erp_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={droga_job} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swift_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={droga_erp_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swift_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swift_3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
