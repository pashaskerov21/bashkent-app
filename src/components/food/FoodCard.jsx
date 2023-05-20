import React from 'react'

function FoodCard({food}) {
    return (
        <div className="food-card">
            <div className="food-img">
                <img src={food.img} alt="food" />
            </div>
            <div className="content">
                <h5 className='title'>{food.name}</h5>
                <div className='text'>
                    <p>{food.text.length > 80 ? food.text.substr(0,80) + ' ...' : food.text}</p>
                </div>
                <div className="price">
                    <span>{food.price.toFixed(2)}₼</span>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
