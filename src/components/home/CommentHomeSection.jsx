import React, { useContext } from 'react'
import SectionTitle from '../SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MainContext } from '../../context/MainContext'
import { Autoplay } from 'swiper';
import CommentCard from '../comment/CommentCard';

function CommentHomeSection() {
  const { commentArr } = useContext(MainContext);
  return (
    <section className="comment home">
      <div className="container">
        <SectionTitle title='Müştəri Rəyləri' />
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {
            commentArr.map(comment => (
              <SwiperSlide key={comment.id}>
                <CommentCard comment={comment}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default CommentHomeSection
