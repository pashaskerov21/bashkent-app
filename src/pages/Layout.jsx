import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Layout({ children }) {
    window.addEventListener('scroll',() => {
        if(window.scrollY > 300){
            document.querySelector('.page-scroll-button').classList.remove('d-none')
        }else{
            document.querySelector('.page-scroll-button').classList.add('d-none')
        }
    })
    return (
        <>
            <button onClick={() => window.scrollTo(0,0)} className='page-scroll-button d-none'><i className="fa-solid fa-chevron-up"></i></button>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
