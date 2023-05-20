import React, { useContext } from 'react'
import {MainContext} from '../../context/MainContext'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });


function RestoranMenu() {
  const {restoranMenuArr} = useContext(MainContext)
  
  return (
    <div className='row'>
      {
        restoranMenuArr.map((menu,index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
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

export default RestoranMenu
