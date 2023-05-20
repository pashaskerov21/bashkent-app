import React, { useContext } from 'react'
import {MainContext} from '../../context/MainContext'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });


function DeliveryMenu() {
  const {deliveryMenuArr} = useContext(MainContext)
  
  return (
    <div className='row'>
      {
        deliveryMenuArr.map((menu,index) => (
          <div key={index} className="col-12 col-lg-6">
            <a data-fancybox='' href={menu} className="menu">
              <img src={menu} alt="menu" />
              <button><i className='fa-solid fa-magnifying-glass'></i></button>
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default DeliveryMenu
