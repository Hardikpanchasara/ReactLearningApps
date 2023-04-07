import React, { lazy, Suspense } from 'react'
// import Card from './Card'
import Navbar from './Navbar'
import Sdata from './Sdata'
import Footer from './Footer';
const Card = lazy(() => import('./Card'))

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="my-5 text-primary text-center">
        <h1>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Suspense fallback={<div>loading.........</div>}>
                {
                  Sdata.map((val, ind) => {
                    return (<Card key={ind} imgsrc={val.imgsrc} title={val.title} />)

                  })
                }
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Service