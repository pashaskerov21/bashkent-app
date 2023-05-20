import React, { useContext } from 'react'
import { Offcanvas } from 'react-bootstrap'
import logo from '../../image/logo/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { MainContext } from '../../context/MainContext'


function MobileMenu({ showMenu, menuCloseClick }) {
    const { pageLinkArr } = useContext(MainContext)
    return (
        <Offcanvas show={showMenu} onHide={menuCloseClick} className='mobile-menu'>
            <Offcanvas.Header>
                <Link to='/' className='logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <button className='close-button' onClick={menuCloseClick}>
                    <i className='fa-solid fa-xmark'></i>
                </button>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="offcanvas-links">
                    {
                        pageLinkArr.map(link => (
                            <NavLink className='btn-general' key={link.id} to={link.path}>{link.label}</NavLink>
                        ))
                    }
                    <Link className='btn-general border d-lg-flex'>Rezervasiya</Link>
                </div>
                <div className="sosial-icons">
                    <Link><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link><i className="fa-brands fa-tiktok"></i></Link>
                    <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                    <Link><i className="fa-brands fa-youtube"></i></Link>
                    <Link><i className="fa-brands fa-instagram"></i></Link>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default MobileMenu
