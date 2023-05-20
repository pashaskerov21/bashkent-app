import React from 'react'
import sectionTitleDesign from '../image/design/rotate.png'

function SectionTitle({title}) {
  return (
    <div className='section-title'>
      <h1>{title}</h1>
      <img src={sectionTitleDesign} alt="design" />
    </div>
  )
}

export default SectionTitle
