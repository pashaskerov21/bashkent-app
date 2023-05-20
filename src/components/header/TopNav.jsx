import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo/logo.png'

function TopNav() {
    return (
        <nav className='top-nav d-none d-lg-flex'>
            <div className="container">
                <div className="inner">
                    <Link className='btn-general border'>Rezervasiya</Link>
                    <Link to='/' className='logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <button className='search-button mobile d-lg-none'><i className='fa-solid fa-magnifying-glass'></i></button>
                    <div className="right d-none d-lg-flex">
                        <div className="sosial-icons">
                            <Link><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link><i className="fa-brands fa-tiktok"></i></Link>
                            <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                            <Link><i className="fa-brands fa-youtube"></i></Link>
                            <Link><i className="fa-brands fa-instagram"></i></Link>
                        </div>
                        <div className="search">
                            <input type="text" />
                            <button><i className='fa-solid fa-magnifying-glass'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNav
