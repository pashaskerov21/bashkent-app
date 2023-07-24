import React, { useContext } from 'react'
import SectionTitle from '../SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { MainContext } from '../../context/MainContext'
import { Link } from 'react-router-dom'

function BlogSection() {
  const { blogArr } = useContext(MainContext)
  return (
    <section className="blogs">
      <div className="container">
        <SectionTitle title='Bloglar' />
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
            blogArr.map(blog => (
              <SwiperSlide key={blog.id}>
                <div className='blog-card'>
                  <div className="blog-img">
                    <img src={blog.img} alt="blog" />
                  </div>
                  <div className="content">
                    <h5 className="title">{blog.title}</h5>
                    <div className="text">
                      <p>{blog.text.length > 120 ? blog.text.substr(0,120) + ' ...' : blog.text}</p>
                    </div>
                    <Link to={`/blogs/${blog.title}`} className='btn-general active round'>Ətraflı <i className='fa-solid fa-arrow-right'></i></Link>
                    <div className="date">
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default BlogSection
