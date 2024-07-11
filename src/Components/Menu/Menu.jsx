import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import rasm from '../../assets/image13.svg'
import rasm1 from '../../assets/image14.svg'
import rasm2 from '../../assets/image15.svg'
import rasm3 from '../../assets/image16.svg'
import rasm4 from '../../assets/image17.svg'

const Menu = () => {
  return (
    <div>
        <div className='container'>
          <div className='menu-men'>
          <div className='menu-blok'>
            <div className='menu-container'>
                <div className='menu-text'>
                <p className='menu-text'>Наша <p className='menu-1'>продукция</p></p>
                </div>
                <div className='menu-wrap'>
                    <div className='button-name'>
                    <button className='button1'>Ламинатные тубы</button>
                    </div>
                    <div className='button-name'>
                    <button className='button2'>Экструзионные тубы</button>
                    </div>
                    <div className='button-name'>
                    <button className='button3'>Другая упаковка</button>
                    </div>
                </div>

    
    
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
        <SwiperSlide><img src={rasm} alt="" /></SwiperSlide>
        <SwiperSlide><img src={rasm1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={rasm2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={rasm3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={rasm4} alt="" /></SwiperSlide>
       
      </Swiper>   
      </div> 
      <div className='btn'>
        <button className='button-name1'>Перейти в каталог</button>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Menu
