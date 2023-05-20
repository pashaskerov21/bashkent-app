import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../image/logo/logo.png'
import { MainContext } from '../../context/MainContext'



function BottomNav({fixed}) {
    const {pageLinkArr} = useContext(MainContext)

    
    return (
        <nav className={fixed ? 'bottom-nav fixed-top d-none d-lg-flex' : 'bottom-nav d-none d-lg-flex'}>
            <div className="container">
                <div className="inner">
                    <Link to='/' className={fixed ? 'logo' : 'logo d-none'}>
                        <img src={logo} alt="logo" />
                    </Link>
                    {
                        pageLinkArr.map(link => (
                            <NavLink className='btn-general' key={link.id} to={link.path}>{link.label}</NavLink>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}

export default BottomNav
