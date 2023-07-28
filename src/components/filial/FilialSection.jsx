import React, { useContext } from 'react'
import SectionTitle from '../SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MainContext } from '../../context/MainContext'
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper'

function FilialSection({titleStatus}) {
  const { filialArr } = useContext(MainContext)
  return (
    <section className="filial">
      <div className="container">
        <SectionTitle title='Filiallar' titleStatus={titleStatus} />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          {
            filialArr.map(filial => (
              <SwiperSlide key={filial.id}>
                <Link to={`/filial/${filial.path}`} className='filial-card'>
                  <div className="filial-img">
                    <img src={filial.image} alt="filial" />
                  </div>
                  <div className='filial-name'>
                    <span>{filial.title}</span>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default FilialSection
