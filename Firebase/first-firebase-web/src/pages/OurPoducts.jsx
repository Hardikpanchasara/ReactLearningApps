import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import Card from '../components/Card'
 
const OurPoducts = () => {
  
  const firebase = useFirebase()
  const [products, setProducts] = useState([])


  useEffect(() => {
    firebase.listAllProducts().then((prod) => setProducts(prod.docs))
    firebase.listAllProducts().then((prod) => console.log(prod.docs[0].data()))
  }, [])

  console.log(products)
  return (
    <>
      <div className="col-10 mx-auto mt-5">
        <div className="row gy-4" >
          {
            products.map((products) => {
              return (<Card {...products.data()} />)
            })
          }
        </div>
      </div>
    </>
  )
}

export default OurPoducts