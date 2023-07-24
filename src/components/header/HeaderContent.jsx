import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import pageTitleDesign from '../../image/design/white.png'
import { MainContext } from '../../context/MainContext';

function HeaderContent() {
    let location = useLocation();
    const { pageLinkArr } = useContext(MainContext)
    let pageLink = pageLinkArr.find((link) => link.path === location.pathname)


    const { blogArr } = useContext(MainContext)
    const [pageTitle, setPageTitle] = useState();
    const [pageRouteLink, setPageRouteLink] = useState();
    const [pageRouteLinkName, setPageRouteLinkName] = useState();
    const { blogName } = useParams();
    const [blogStatus, setBlogStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (pageLink) {
            setPageTitle(pageLink.label)
            setPageRouteLink(pageLink.path);
            setPageRouteLinkName(pageLink.label);
        } else if (blogName) {
            setBlogStatus(true)
            const blog = blogArr.find((blog) => blog.title === blogName)
            if (blog) {
                setPageTitle('Bloglar')
                setPageRouteLink(blog.title);
                setPageRouteLinkName(blog.title);
            } else {
                navigate('/404');
            }
        }else if(location.pathname === '/blogs'){
            setPageTitle('Bloglar')
            setPageRouteLink('/blogs');
            setPageRouteLinkName('Bloglar');
        } else {
            setPageTitle('Səhifə tapılmadı')
            setPageRouteLink('/404');
            setPageRouteLinkName('404');
        }
    }, [blogName, blogArr, pageLink, navigate ,location.pathname])


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
                                <Link to='/'>Əsas Səhifə</Link>
                                <i className='fa-solid fa-chevron-right'></i>
                                {
                                    blogStatus ? (
                                        <>
                                            <Link to='/blogs'>Bloglar</Link>
                                            <i className='fa-solid fa-chevron-right'></i>
                                            <Link to={`/blogs/${pageRouteLink}`}>{pageRouteLinkName}</Link>
                                        </>
                                    ) : (
                                        <Link to={`/${pageRouteLink}`}>{pageRouteLinkName}</Link>
                                    )
                                }
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default HeaderContent
