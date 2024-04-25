import React from 'react'
import './Hero.css';
const Hero = () => {
  return (
    <>
        <div className="hero container">
            <div className="hero-text">
                <h1>We ensure Better Education for better world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dicta similique quis eaque aspernatur ab recusandae natus</p>
                <button className="btn">
                    Explore More<span className='arrow'>&#8594;</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default Hero