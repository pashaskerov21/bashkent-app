import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import { Link } from 'react-router-dom'

function FoodCateforySection() {
  const { foodCategories } = useContext(MainContext)
  return (
    <section className="food-category">
      <div className="container-fluid">
        <div className="row">
          {
            foodCategories.map(category => (
              <div key={category.id} className="col-12 col-md-6 col-lg-4">
                <Link to='/food' className='category-card'>
                  <div className='cover-img'>
                    <img src={category.cover} alt="category-cover" />
                  </div>
                  <div className='hover'>
                    <div className='name'>
                      <span>{category.title}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default FoodCateforySection
