import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import pageTitleDesign from '../../image/design/white.png'
import { MainContext } from '../../context/MainContext';

function HeaderContent() {
    let location = useLocation();
    const { pageLinkArr } = useContext(MainContext)
    let pageLink = pageLinkArr.find((link) => link.path === location.pathname)
    
    let pageTitle = pageLink === undefined ? 'Blog' : pageLink.label 
    return (
        <div className='header-content'>
            <div className="container">
                {
                    location.pathname === '/' ? (
                        <div className="home">
                            <h1 className='title'>Ən dadlı yeməklərin ünvanı</h1>
                            <Link to='/about' className='btn-general active round'>Ətraflı</Link>
                        </div>
                    ) : (
                        <div className="page-title">
                            <h1 className="title">{pageTitle}</h1>
                            <img src={pageTitleDesign} alt="design" />
                            <div className="root-links">
                                <span>Əsas Səhifə</span>
                                <i className='fa-solid fa-chevron-right'></i>
                                <span>{pageTitle}</span>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default HeaderContent
