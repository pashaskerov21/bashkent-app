import React, { useContext, useState } from 'react'
import SectionTitle from '../SectionTitle'
import { MainContext } from '../../context/MainContext'
import FoodCard from './FoodCard';

function FoodSection() {
  const { foodCategories } = useContext(MainContext)

  const [selectedCategory, setSelectedCategory] = useState(foodCategories.length > 0 ? foodCategories[0].id : null);
  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(categoryId);
    } else {
      setSelectedCategory(categoryId);
    }
  };



  return (
    <section className="food">
      <div className="container">
        <SectionTitle title='Yeməklər' />
        <div className='food-category-buttons'>
          <div className="inner">
            {
              foodCategories.map(category => (
                <button onClick={() => handleCategoryClick(category.id)} className={selectedCategory === category.id ? 'active' : null} key={category.id}>{category.title}</button>
              ))
            }
          </div>
        </div>

        {selectedCategory && (
          <div className='row'>
            {foodCategories.find((category) => category.id === selectedCategory).foods.map((food) => (
              <div key={food.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                <FoodCard food={food}/>
              </div>
            ))}

          </div>
        )}
      </div>
    </section>
  )
}

export default FoodSection
