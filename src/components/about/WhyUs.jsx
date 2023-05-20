import React from 'react'
import icon_1 from '../../image/about/small-img/img-1.png'
import icon_2 from '../../image/about/small-img/img-2.png'
import icon_3 from '../../image/about/small-img/img-3.png'
import SectionTitle from '../SectionTitle'

function WhyUs() {
  return (
    <div className='why-us'>
      <SectionTitle title='Niyə biz?'/>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-4">
          <div className="item">
            <img src={icon_1} alt="icon" />
            <span>Ürəkaçan məkan</span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <div className="item">
            <img src={icon_2} alt="icon" />
            <span>Dadlı yeməklər</span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <div className="item">
            <img src={icon_3} alt="icon" />
            <span>Gülərüz xidmət</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
