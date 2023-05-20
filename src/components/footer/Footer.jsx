import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo/logo.png'
import { MainContext } from '../../context/MainContext'


function Footer() {
  const { pageLinkArr } = useContext(MainContext)
  const d = new Date();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xxl-3 logo-col">
            <div className="inner">
              <Link to='/' className='logo'>
                <img src={logo} alt="logo" />
              </Link>
              <div className="sosial-icons">
                <Link><i className="fa-brands fa-facebook-f"></i></Link>
                <Link><i className="fa-brands fa-tiktok"></i></Link>
                <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                <Link><i className="fa-brands fa-youtube"></i></Link>
                <Link><i className="fa-brands fa-instagram"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div className="footer-links">
              <h2 className='title'>Menyular</h2>
              {
                pageLinkArr.map(link => (
                  <Link key={link.id} to={link.path}>{link.label}</Link>
                ))
              }
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div className="footer-links">
              <h2 className='title'>Faydalı linklər</h2>
              <Link>Tez-tez soruşulanlar</Link>
              <Link>Vakansiya</Link>
              <Link>Xidmət şəbəkəsi</Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
            <div className="footer-links">
              <h2 className='title'>Ünvan</h2>
              <Link><i className='fa-solid fa-location-dot'></i> Azərbaycan, Bakı ş., Əhməd Rəcəbli</Link>
              <Link><i className="fa-solid fa-phone"></i> 0554501102</Link>
              <Link><i className="fa-solid fa-envelope"></i> bashkentrestoran@gmail.com</Link>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="text">
            &copy; {d.getFullYear()} | Bütün hüquqlar qorunur.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
