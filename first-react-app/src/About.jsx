import React from 'react'
import Common from './Common'
import growth from "../src/img/team.png"
import Footer from './Footer';
import Navbar from './Navbar'


const About = () => {
  return (
    <>
      <Navbar />
      <Common
        name='Welcome to About Page of'
        imgsrc={growth}
        visit="/contact"
        btname="Contact Now" />
      <Footer />
    </>
  )
}

export default About