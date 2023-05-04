import React, { useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
const Contact = () => {
  const [data, setData] = useState(
    {
      fullname: "",
      email: "",
      msg: "",
    }
  )

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    // alert(`My name is ${data.fullname}, my email is ${data.email} , my message is ${data.msg}`);
    alert("Data submitted")

    const {fullname,email,msg} = data

    const res = await fetch("https://learning-project-a8e17-default-rtdb.firebaseio.com/contactform.json" ,{
      method : "POST" ,
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
          fullname,
          email,
          msg
        })
      
    })

    setData({
      fullname: "",
      email: "",
      msg: "",
    })

  }

  return (
    <>
      <Navbar />
      <div className='container my-5 '>
        <div className="my-5 text-primary text-center">
          <h1>Contact Us</h1>
        </div>
        <div className='w-50 mx-auto '>
          <form onSubmit={formSubmit} method='POST' >
            <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' name='fullname' onChange={InputEvent} value={data.fullname} required />
            <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' name='email' onChange={InputEvent} value={data.email} required />
            <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' name='msg' onChange={InputEvent} value={data.msg} required />

            <MDBBtn type='submit' className='mb-5' block >
              Contact
            </MDBBtn>
          </form>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Contact