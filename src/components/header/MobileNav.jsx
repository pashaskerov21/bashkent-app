import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo/logo.png'

function MobileNav({ menuOpenClick, fixed, openSearch }) {
    return (
        <nav className={fixed ? 'mobile-nav fixed-top d-lg-none' : 'mobile-nav d-lg-none'}>
            <div className="container">
                <div className="inner">
                    <button onClick={menuOpenClick} className='menu-button mobile'><i className='fa-solid fa-bars'></i></button>
                    <Link to='/' className='logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <button onClick={openSearch} className='search-button mobile'><i className='fa-solid fa-magnifying-glass'></i></button>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav
