import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonial = () => {
    const sliders = useRef();
    let tx=0;
    const SlideForward=()=>{
        if(tx>-50){
            tx-=50;
        }
        sliders.current.style.transform=`translateX(${tx}%)`;
    }
    const SlideBackward=()=>{
        if(tx<0){
            tx+=50;
        }
        sliders.current.style.transform=`translateX(${tx}%)`;
        
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} onClick={SlideForward} className='next-btn' alt="" />
            <img src={back_icon} onClick={SlideBackward} className='back-btn' alt="" />
            <div className="slider">
                <ul ref={sliders}>
                    
                    <li> <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <h3>Angela</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia sequi accusamus ipsam ut sed ipsa dolorum corporis aliquam odio. Fugiat aspernatur laborum perferendis eveniet fuga aliquid, sequi eius officia!</p>
                    </li>
                    <li> <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <h3>Jhon</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia sequi accusamus ipsam ut sed ipsa dolorum corporis aliquam odio. Fugiat aspernatur laborum perferendis eveniet fuga aliquid, sequi eius officia!</p>
                    </li>
                    <li> <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <h3>Angela</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia sequi accusamus ipsam ut sed ipsa dolorum corporis aliquam odio. Fugiat aspernatur laborum perferendis eveniet fuga aliquid, sequi eius officia!</p>
                    </li>
                    <li> <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <h3>Angela</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia sequi accusamus ipsam ut sed ipsa dolorum corporis aliquam odio. Fugiat aspernatur laborum perferendis eveniet fuga aliquid, sequi eius officia!</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial