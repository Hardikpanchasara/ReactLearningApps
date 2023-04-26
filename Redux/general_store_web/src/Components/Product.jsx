

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProductById } from '../Redux/Features/ProductSlice'
import Card from './Common/Card'
import Loader from './Common/Loader'
import SerchBox from './SerchBox'

const Product = () => {
  const { loading, error, products } = useSelector(state => ({ ...state.app }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchProductById())
  }, [dispatch])

  //if you want modified your data follow this 
  // const [modifiedProducts ,setModifiedProducts ] = useState([])
  // useEffect(() => {
  //   if(products){
  //     const Newproducts = products.map((val) => {
  //       const {id , title ,description , image , price } = val
  //       return{
  //         id : id ,
  //         title :title ,
  //         description : description ,
  //         image :image ,
  //         price :price ,
  //       }
  //     });
  //     setModifiedProducts(Newproducts)
  //   }
  //   else{
  //     setModifiedProducts([])
  //   }
  //   console.log(modifiedProducts)
  // } , [products])

  // if (loading) {
  //   return (<Loader />)
  // }
  // if (error) {
  //   console.log(error)
  //   return (
  //     <h1>{error.message}</h1>
  //   )
  // }
  return (
    <>
      {
      loading ? <Loader /> : error ? <h1 style={{ textAlign: "center" }}>{error.message}</h1> :
      <section className="main_heading my-5  ">
        <div className="container ">
          <div>
            <h2 className="text-center display-4">Our Products</h2>
            <hr className="w-25 mx-auto" />
          </div>
          <div className="mt-5">
            <div className="row gy-4">
              {
                products.map((val) => {
                  return (
                    <Card
                      id={val.id}
                      title={val.title}
                      description={val.description}
                      img={val.image}
                      price={val.price}
                      rating={val.rating.rate} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      }
    </>
  )
}

export default Product