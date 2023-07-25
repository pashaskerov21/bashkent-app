import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo/logo.png'
import Search from './Search'

function GeneralNav({ fixed, handleMenuToggle, showSearch, handleSearchToggle }) {
    return (
        <nav className={`general-nav ${fixed ? 'fixed-top' : ''}`}>
            <div className="container">
                <div className="inner">
                    <Link className='btn-general border d-none d-xl-flex'>Rezervasiya</Link>
                    <button onClick={handleMenuToggle} className='menu-button mobile d-xl-none'><i className='fa-solid fa-bars'></i></button>
                    <Link to='/' className='logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="right">
                        <button onClick={handleSearchToggle} className='search-button mobile d-xl-none'><i className='fa-solid fa-magnifying-glass'></i></button>
                        <div className="sosial-icons d-none d-xl-flex">
                            <Link><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link><i className="fa-brands fa-tiktok"></i></Link>
                            <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                            <Link><i className="fa-brands fa-youtube"></i></Link>
                            <Link><i className="fa-brands fa-instagram"></i></Link>
                        </div>
                        <div className={`search-form ${showSearch ? 'active' : ''}`}>
                            <button onClick={handleSearchToggle} className="close-button d-xl-none">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            <Search handleSearchToggle={handleSearchToggle}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default GeneralNav
