import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../context/MainContext';
import { sendSearchProducts } from '../../redux/SearchAction';

function Search({ handleSearchToggle }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchInputValue, setSearchInputValue] = useState('');
    const { pageLinkArr, foodArr } = useContext(MainContext);

    

    const handleSearchFormSubmit = (e) => {
        e.preventDefault()
        handleSearchToggle();

        let searchPage = pageLinkArr.find((link) => link.label.trim().toLocaleLowerCase().includes(searchInputValue.trim().toLocaleLowerCase()));
        if (searchPage) {
            navigate(`${searchPage.path}`)
        } else if (searchInputValue.trim().toLocaleLowerCase() === 'blog' || searchInputValue.trim().toLocaleLowerCase() === 'bloglar') {
            navigate('/blogs')
        } else if (searchInputValue.trim().toLocaleLowerCase() === 'foto' || searchInputValue.trim().toLocaleLowerCase() === 'fotolar') {
            navigate('/gallery/photo')
        } else if (searchInputValue.trim().toLocaleLowerCase() === 'video' || searchInputValue.trim().toLocaleLowerCase() === 'videolar') {
            navigate('/gallery/video')
        }else if(searchInputValue.trim().toLocaleLowerCase() === 'restoran' || searchInputValue.trim().toLocaleLowerCase() === 'restoran menyu'){
            navigate('/menu/restoran');
        }else if(searchInputValue.trim().toLocaleLowerCase() === 'çatdırılma' || searchInputValue.trim().toLocaleLowerCase() === 'çatdırılma menyu'){
            navigate('/menu/delivery');
        } else {
            navigate('/search');
        }


        let searchProducts = foodArr.filter((product) => product.name.trim().toLocaleLowerCase().includes(searchInputValue.trim().toLocaleLowerCase()));
        if (searchProducts.length > 0) {
            navigate('/search');
        }
        dispatch(sendSearchProducts(searchProducts));
        setSearchInputValue('');
    }
    return (
        <form onSubmit={handleSearchFormSubmit}>
            <input type="text" placeholder='Axtar' value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} />
            <button><i className='fa-solid fa-magnifying-glass'></i></button>
        </form>
    )
}

export default Search
