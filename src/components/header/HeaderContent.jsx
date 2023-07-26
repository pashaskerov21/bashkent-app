import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import pageTitleDesign from '../../image/design/white.png'
import { MainContext } from '../../context/MainContext';
import { useSelector } from 'react-redux';

function HeaderContent() {
    const location = useLocation();
    const navigate = useNavigate();
    const { pageLinkArr, blogArr, filialArr } = useContext(MainContext);
    const { blogName, foodCategoryID, filialPath } = useParams();

    const [pageTitle, setPageTitle] = useState();
    const [pageRouteLink, setPageRouteLink] = useState();
    const [pageRouteLinkName, setPageRouteLinkName] = useState();


    const searchResults = useSelector(state => state.searchState.searchProducts);
    let pageLink = pageLinkArr.find((link) => link.path === location.pathname)
    if (foodCategoryID) {
        pageLink = pageLinkArr.find((link) => link.path === '/food')
    }

    useEffect(() => {
        if (pageLink) {
            setPageTitle(pageLink.label)
            setPageRouteLink(pageLink.path);
            setPageRouteLinkName(pageLink.label);
        } else if (blogName) {
            const blog = blogArr.find((blog) => blog.title === blogName)
            setPageTitle('Bloglar')
            setPageRouteLink(blog?.title);
            setPageRouteLinkName(blog?.title);
        } else if (filialPath) {
            const filial = filialArr.find((filial) => filial.path === filialPath)
            setPageTitle(filial?.title)
            setPageRouteLink(filial?.path)
            setPageRouteLinkName(filial?.title)
        } else if (location.pathname === '/blogs') {
            setPageTitle('Bloglar')
            setPageRouteLink('/blogs');
            setPageRouteLinkName('Bloglar');
        } else if (location.pathname === '/search') {

            if (searchResults.length > 0) {
                setPageTitle('Axtarış')
            } else {
                let alert = <div className='search-alert'>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span>Axtarışa uyğun nəticə tapılmadı</span>
                </div>
                setPageTitle(alert)
            }
            setPageRouteLink('/search');
            setPageRouteLinkName('Axtarış');
        } else {
            setPageTitle('Səhifə tapılmadı')
            setPageRouteLink('/404');
            setPageRouteLinkName('404');
        }
    }, [blogName, blogArr, pageLink, navigate, location.pathname, searchResults,filialArr, filialPath])


    return (
        <div className='header-content'>
            <div className="container">
                {
                    location.pathname === '/' ? (
                        <div className="home">
                            <h1 className='title'>Ən dadlı yeməklərin ünvanı</h1>
                            <Link to='/about' className='btn-general active'>Ətraflı</Link>
                        </div>
                    ) : (
                        <div className="page-title">
                            <h1 className="title">{pageTitle}</h1>
                            <img src={pageTitleDesign} alt="design" />
                            <div className="root-links">
                                <Link to='/'>Əsas Səhifə</Link>
                                <i className='fa-solid fa-chevron-right'></i>
                                {blogName && (
                                    <>
                                        <Link to='/blogs'>Bloglar</Link>
                                        <i className='fa-solid fa-chevron-right'></i>
                                    </>
                                )}
                                {filialPath && (
                                    <>
                                        <Link to='/filial'>Filiallar</Link>
                                        <i className='fa-solid fa-chevron-right'></i>
                                    </>
                                )}
                                <Link to={`/${pageRouteLink}`}>{pageRouteLinkName}</Link>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default HeaderContent
