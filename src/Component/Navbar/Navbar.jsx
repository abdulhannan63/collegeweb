import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setsticky] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  }, [])
  const [mob, setmob] = useState(false)
  const toggleMenu =  ()=>{
    mob? setmob(false):setmob(true);
    
  }
  return (
    <>
      <nav className={`container ${sticky?'dark-nav':''} `}>
        <img src={logo} className='logo' alt="" />
        <ul className={mob?'':'hide_menu'}>
          <li>
            <Link to='hero' smooth={true} offset={0} duration={500} >Home</Link>
          </li>
          <li>
          <Link to='programs' smooth={true} offset={-260} duration={500} >Program</Link>
          </li>
          <li>
          <Link to='about' smooth={true} offset={-150} duration={500} >About us</Link>
          </li>
          <li>
          <Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link>
          </li>
          <li>
          <Link to='testimonials' smooth={true} offset={-260} duration={500} >Testimonial</Link>
          </li>
          <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'> Contact us</Link></li>
        </ul>
        <img src={menu} alt="" onClick={toggleMenu} className='menu_icon' />
      </nav>
    </>
  )
}

export default Navbar