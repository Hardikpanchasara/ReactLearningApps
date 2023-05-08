import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { useFirebase } from '../context/Firebase';



export default function AddProductspage() {

  const [product, setProduct] = useState({
    name: "",
    id: "",
    price: "",
    coverpic: "",
  })

  const firebase = useFirebase()
  console.log(firebase)

  const userdata = (e) => {
    // const value = e.target.value
    // const name = e.target.name
    const { name, value } = e.target
    setProduct((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const submitdata = async (event) => {
    event.preventDefault()
    await firebase.createNewProduct(product.name, product.id ,product.price, product.coverpic)
    setProduct({
      name: "",
      id: "",
      price: "",
      coverpic: "",
    })
  }


  return (
    <>
      <div className="container mt-5 col-4">
        <form>
          <MDBInput className='mb-4' type='text' id='form2Example1' label='product name' name='name' onChange={userdata} required value={product.name} />
          <MDBInput className='mb-4' type='text' id='form2Example2' label='product id' name='id' onChange={userdata} required value={product.id} />
          <MDBInput className='mb-4' type='number' id='form2Example2' label='price' name='price' onChange={userdata} required value={product.price} />
          <MDBInputGroup className='mb-3'>
            <input className='form-control' type='file' required name='coverpic' onSelect={userdata} />
            {/* <MDBBtn outline color='secondary'>
              Button
            </MDBBtn> */}
          </MDBInputGroup>

          
          <MDBBtn type='submit' className='mb-4' block onClick={submitdata} >
            create product
          </MDBBtn>

        </form>
      </div>
    </>
  );
}