import React, { useState } from 'react'
import GalleryPhoto from './GalleryPhoto'
import GalleryVideo from './GalleryVideo'

function GallerySection() {
  const [active,setActive] = useState(true)
  const buttonHandleClick = () => {
    setActive(!active)
  }
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-buttons">
          <button className={active ? 'active' : null} onClick={buttonHandleClick}>Fotolar</button>
          <button className={active ? null : 'active'} onClick={buttonHandleClick}>Videolar</button>
        </div>
        {
          active ? <GalleryPhoto/> : <GalleryVideo/>
        }
      </div>
    </section>
  )
}

export default GallerySection
