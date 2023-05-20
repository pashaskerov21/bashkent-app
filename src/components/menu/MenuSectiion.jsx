import React, { useState } from 'react'
import DeliveryMenu from './DeliveryMenu'
import RestoranMenu from './RestoranMenu'

function MenuSectiion() {
  const [active, setActive] = useState(true)
  const buttonHandleClick = () => {
    setActive(!active)
  }
  return (
    <section className="menu">
      <div className="container">
        <div className="menu-buttons">
          <button className={active ? 'active' : null} onClick={buttonHandleClick}>Restoran menyu</button>
          <button className={active ? null : 'active'} onClick={buttonHandleClick}>Çatdırılma menyusu</button>
        </div>
        {
          active ? <RestoranMenu/> : <DeliveryMenu/> 
        }
      </div>
    </section>
  )
}

export default MenuSectiion
