import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import rasm1 from '../../assets/image 7.svg'
import rasm2 from '../../assets/image 8.svg'
import rasm3 from '../../assets/image 9.svg'
import rasm4 from '../../assets/image 10.svg'
import rasm5 from '../../assets/image 11.svg'
const About = () => {
  return (
    <div className='container'>
      <div className='about'>
        <div className='about-container'>
            <div className='about-text'>
                <p className='about-text'>Качество продукции подтверждают <p className='about-1'>сертификаты</p> </p>
            </div>
        
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        slidesPerView={5}
        loop={"true"}
        spaceBetween={20}
      >
        <SwiperSlide> <img src={rasm1} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={rasm2} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={rasm3} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={rasm4} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={rasm5} alt="" /></SwiperSlide>
      </Swiper>
    
        </div>
      </div>
    </div>
  )
}

export default About
