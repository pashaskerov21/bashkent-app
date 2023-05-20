import React, { useState } from 'react'
import BannerSwiper from './BannerSwiper'
import HeaderContent from './HeaderContent'
import MobileMenu from './MobileMenu'
import MobileNav from './MobileNav'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import MobileSearch from './MobileSearch'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const menuOpenClick = () => {
    setShowMenu(true)
  }
  const menuCloseClick = () => {
    setShowMenu(false)
  }
  const [fixed, setFixed] = useState(false)
  window.addEventListener('scroll', function () {
    if (this.window.scrollY > 300) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  })
  const [showSearch, setShowSearch] = useState(false);
  const openSearch = () => {setShowSearch(true)}
  const closeSearch = () => {setShowSearch(false)}
  return (
    <header>
      <BannerSwiper />
      <MobileNav menuOpenClick={menuOpenClick} fixed={fixed} openSearch={openSearch} />
      <MobileMenu showMenu={showMenu} menuCloseClick={menuCloseClick} />
      <MobileSearch showSearch={showSearch} closeSearch={closeSearch}/>
      <TopNav />
      <BottomNav fixed={fixed} />
      <HeaderContent />
    </header>
  )
}

export default Header


