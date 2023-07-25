import React, { useState } from 'react'
import BannerSwiper from './BannerSwiper'
import HeaderContent from './HeaderContent'
import GeneralNav from './GeneralNav'
import NavLinks from './NavLinks'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenuToggle = () => setShowMenu(!showMenu);
  const [fixed, setFixed] = useState(false)
  window.addEventListener('scroll', function () {
    if (this.window.scrollY > 300) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  })
  const [showSearch, setShowSearch] = useState(false);
  const handleSearchToggle = () => setShowSearch(!showSearch);
  return (
    <header>
      <BannerSwiper />
      <GeneralNav fixed={fixed} handleMenuToggle={handleMenuToggle} showSearch={showSearch} handleSearchToggle={handleSearchToggle}/>
      <NavLinks fixed={fixed} showMenu={showMenu} handleMenuToggle={handleMenuToggle}/>
      <HeaderContent />
    </header>
  )
}

export default Header


