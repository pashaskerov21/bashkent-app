import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/MainContext'
import { useNavigate, useParams } from 'react-router-dom';

function MenuSectiion() {
  const [activeCategory, setActiveCategory] = useState('restoran');

  const {menuCategory} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if(menuCategory){
      navigate('/menu')
      setActiveCategory(menuCategory)
    }
  },[menuCategory, navigate])


  const buttonHandleClick = (value) => {
    setActiveCategory(value)
  }
  const { menuData } = useContext(MainContext)
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    let filteredItems = menuData.filter((item) => item.category === activeCategory);
    setMenuItems([...filteredItems])
  }, [activeCategory, menuData])
  return (
    <section className="menu">
      <div className="container">
        <div className="menu-buttons">
          <button className={activeCategory === 'restoran' ? 'active' : ''} onClick={() => buttonHandleClick('restoran')}>Restoran menyu</button>
          <button className={activeCategory === 'delivery' ? 'active' : ''} onClick={() => buttonHandleClick('delivery')}>Çatdırılma menyusu</button>
        </div>
        {
          menuItems.length > 0 ? (
            <div className='row'>
              {
                menuItems.map((item) => (
                  <div key={item.id} className={`col-12 col-md-6 ${menuItems.length > 3 ? 'col-lg-4' : ''} ${menuItems.length > 4 ? 'col-xl-3' : ''}`}>
                    <a data-fancybox='' href={item.link} className="menu">
                      <img src={item.cover} alt="menu" />
                      <button><i className='fa-solid fa-magnifying-glass'></i></button>
                    </a>
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

export default MenuSectiion
