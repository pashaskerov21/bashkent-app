import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

function GalleryPhoto() {
    const {galleryPhotoArr} = useContext(MainContext)
  return (
    <div className='gallery-container row'>
      {
        galleryPhotoArr.map((photo,index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xxl-3">
                <div className="gallery-card">
                    <img src={photo} alt="gallery-img" />
                    <a href={photo} data-fancybox='' ><i className='fa-solid fa-magnifying-glass'></i></a>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default GalleryPhoto
