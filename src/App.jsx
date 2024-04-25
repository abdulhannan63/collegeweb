import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title title='Our Program' subtitle='What We Offer' />
          <Programs />
          <About />
          <Title title='Gallery' subtitle='Campus Photos' />
          <Campus />
          <Title title='Testimonial' subtitle='What Student Say' />
          <Testimonial />
          <Title title='Contact Us' subtitle='Get In Touch' />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App