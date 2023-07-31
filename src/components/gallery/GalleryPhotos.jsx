import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext';

function GalleryPhotos() {
    const { galleryData } = useContext(MainContext);
    const photos = galleryData.filter((item) => item.category === 'photo');
  return (
    <section className="gallery">
      <div className="container">
        {
          photos.length > 0 ? (
            <div className='gallery-container row'>
              {
                photos.map((item) => (
                  <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xxl-3">
                    <div className="gallery-card">
                      <img src={item.cover} alt="gallery-img" />
                      <a href={item.link} data-fancybox='' ><i className='fa-solid fa-magnifying-glass'></i></a>
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

export default GalleryPhotos
