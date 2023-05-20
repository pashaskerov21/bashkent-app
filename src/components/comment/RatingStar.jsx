import React from 'react'

function RatingStar({star}) {
    const renderStar = () => {
        const userStar = parseInt(star)
        const emptyStar = 5 - userStar;
        const stars = [];

        for(let i = 0; i < userStar; i++){
            stars.push(<i key={i} className="fa-solid fa-star"></i>)
        }
        for(let i = 0; i < emptyStar; i++){
            stars.push(<i key={i + 5} className="fa-regular fa-star"></i>)
        }
        return stars
    }
  return (
    <div className='rating-stars'>
      {renderStar()}
    </div>
  )
}

export default RatingStar
