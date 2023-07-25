import React from 'react'
import Layout from './Layout'
import { useSelector } from 'react-redux'
import FoodCard from '../components/food/FoodCard';

function SearchResult() {
  const searchResults = useSelector(state => state.searchState.searchProducts);
  return (
    <Layout>
      <section className="search-result">
        <div className="container">
          {searchResults.length > 0 ? (
            <div className='row'>
              {searchResults.map((food) => (
                <div key={food.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <FoodCard food={food} />
                </div>
              ))}

            </div>
          ) : (
            <div className='search-alert'>
              <i className="fa-solid fa-circle-exclamation"></i>
              
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default SearchResult
