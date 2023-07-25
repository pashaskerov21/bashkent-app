import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../image/logo/logo.png'
import { MainContext } from '../../context/MainContext'

function NavLinks({fixed,showMenu, handleMenuToggle }) {
    const { pageLinkArr } = useContext(MainContext)
    return (
        <>
            <div className={`nav-backdrop ${showMenu ? '' : 'd-none'}`} onClick={handleMenuToggle}></div>
            <div className={`nav-links ${showMenu ? 'active' : ''} ${fixed ? 'fixed-top' : ''}`}>
                <div className="container">
                    <div className="header">
                        <Link to='/' className='logo'>
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className='close-button d-xl-none' onClick={handleMenuToggle}>
                            <i className='fa-solid fa-xmark'></i>
                        </button>
                    </div>
                    <div className="body">
                        <div className="links">
                            {
                                pageLinkArr.map(link => (
                                    <NavLink className='btn-general' key={link.id} to={link.path}>{link.label}</NavLink>
                                ))
                            }
                            <Link className='btn-general border d-xl-none'>Rezervasiya</Link>
                        </div>
                        <div className="sosial-icons d-xl-none">
                            <Link><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link><i className="fa-brands fa-tiktok"></i></Link>
                            <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                            <Link><i className="fa-brands fa-youtube"></i></Link>
                            <Link><i className="fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavLinks
