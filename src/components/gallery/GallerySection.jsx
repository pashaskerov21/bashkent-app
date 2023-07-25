import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/MainContext'
import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});


function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('photo')
  const buttonHandleClick = (value) => {
    setActiveCategory(value)
  }
  const { galleryData } = useContext(MainContext)
  const [galleryItems, setGalleryItems] = useState([]);
  useEffect(() => {
    let filteredItems = galleryData.filter((item) => item.category === activeCategory);
    setGalleryItems([...filteredItems])
  }, [activeCategory, galleryData])
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-buttons">
          <button className={activeCategory === 'photo' ? 'active' : ''} onClick={() => buttonHandleClick('photo')}>Fotolar</button>
          <button className={activeCategory === 'video' ? 'active' : ''} onClick={() => buttonHandleClick('video')}>Videolar</button>
        </div>
        {
          galleryItems.length > 0 ? (
            <div className='gallery-container row'>
              {
                galleryItems.map((item) => (
                  <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xxl-3">
                    <div className="gallery-card">
                      <img src={item.cover} alt="gallery-img" />
                      <a href={item.link} data-fancybox={`gallery-${activeCategory}`} ><i className='fa-solid fa-magnifying-glass'></i></a>
                    </div>
                  </div>
                ))
              }
            </div>
          ) : null
        }
      </div>
    </section>
  )
}

export default GallerySection
