import React, { useContext } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { MainContext } from '../../context/MainContext'

function BannerSwiper() {
  const {bannerImgArr} = useContext(MainContext)
  return (
    <div className='banner-swiper-container'>
      <Swiper>
        {
          bannerImgArr.map((image,index) => (
            <SwiperSlide key={index}>
              <div className="banner-img" style={{backgroundImage: `url(${image})`}}></div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default BannerSwiper
