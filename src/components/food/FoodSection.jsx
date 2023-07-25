import React, { useContext, useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle'
import { MainContext } from '../../context/MainContext'
import FoodCard from './FoodCard';
import { useNavigate, useParams } from 'react-router-dom';

function FoodSection() {
  const { foodCategories, foodArr } = useContext(MainContext)

  const [selectedCategoryID, setSelectedCategoryID] = useState(foodCategories.length > 0 ? foodCategories[0].id : null);

  const {foodCategoryID} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if(foodCategoryID){
      setSelectedCategoryID(parseInt(foodCategoryID));
      navigate('/food')
    }
  },[foodCategoryID, navigate])

  


  const handleCategoryClick = (categoryId) => {
    if (selectedCategoryID === categoryId) {
      setSelectedCategoryID(categoryId);
    } else {
      setSelectedCategoryID(categoryId);
    }
  };

  const [foods, setFoods] = useState([]);
   
  useEffect(() => {
    let filteredFoods = foodArr.filter((food) => food.categoryID === selectedCategoryID);
    setFoods([...filteredFoods]);

  }, [selectedCategoryID, foodArr])


  return (
    <section className="food">
      <div className="container">
        <SectionTitle title='Yeməklər' />
        <div className='food-category-buttons'>
          <div className="inner">
            {
              foodCategories.map(category => (
                <button onClick={() => handleCategoryClick(category.id)} className={selectedCategoryID === category.id ? 'active' : null} key={category.id}>{category.title}</button>
              ))
            }
          </div>
        </div>

        {selectedCategoryID && foods.length > 0 ? (
          <div className='row'>
            {foods.map((food) => (
              <div key={food.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                <FoodCard food={food}/>
              </div>
            ))}

          </div>
        ) : null}
      </div>
    </section>
  )
}

export default FoodSection
