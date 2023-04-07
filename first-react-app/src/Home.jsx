import React from 'react'
import Common from './Common'
import growth from "../src/img/team.png"
import Footer from './Footer';
import Navbar from './Navbar';


const Home = () => {
  return (
    <>
      <Navbar />
      <Common
        name='Grow Your Business With '
        imgsrc={growth}
        visit="/service"
        btname="GEt Started" />
      <Footer />
    </>
  )
}

export default Home