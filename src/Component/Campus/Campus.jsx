import React from 'react'
import './Campus.css'
import gal_1 from '../../assets/gallery-1.png'
import gal_2 from '../../assets/gallery-2.png'
import gal_3 from '../../assets/gallery-3.png'
import gal_4 from '../../assets/gallery-4.png'
const Campus = () => {
  return (
    <>
    <div className="campus">
        <div className="gallery">
            <img src={gal_1} alt="" />
            <img src={gal_2} alt="" />
            <img src={gal_3} alt="" />
            <img src={gal_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more</button>
    </div>

    </>
  )
}

export default Campus