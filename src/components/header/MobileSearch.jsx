import React from 'react'

function MobileSearch({ showSearch, closeSearch }) {
    return (
        <div className={showSearch ? 'mobile-search d-lg-none' : 'mobile-search d-none d-lg-none'}>
            <div className="container">
                <button  onClick={closeSearch} className="close-button">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <form action="#">
                    <input type="text" placeholder='Axtar' />
                    <button><i className='fa-solid fa-magnifying-glass'></i></button>
                </form>
            </div>
        </div>
    )
}

export default MobileSearch
