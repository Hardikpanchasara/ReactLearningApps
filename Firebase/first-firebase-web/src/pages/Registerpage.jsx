import React, { useState } from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import { useFirebase } from '../context/Firebase';

export default function Registerpage() {

    const [user , setUser ] = useState({
        email : "" ,
        password : "" ,
    })

    const firebase = useFirebase()
    console.log(firebase)

    const userdata = (e) => {
        // const value = e.target.value
        // const name = e.target.name
        const {name , value} = e.target
        setUser((prev) => {
            return {
                ...prev ,
                [name] : value
            }
        })
    }
    const submitdata = async(event) => {
        event.preventDefault() 
        await firebase.signupUserWithEmail(user.email , user.password)
        setUser({
            email : "" ,
            password : "" ,
        })

    }

    return (
        <>
            <div className="container mt-5 col-4">
                <form>
                    {/* <MDBRow className='mb-4'>
                        <MDBCol>
                            <MDBInput id='form3Example1' label='First name' />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput id='form3Example2' label='Last name' />
                        </MDBCol>
                    </MDBRow> */}
                    <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' name='email' onChange={userdata} required />
                    <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' name='password' onChange={userdata} required />

                    {/* <MDBCheckbox
                        wrapperClass='d-flex justify-content-center mb-4'
                        id='form3Example5'
                        label='Subscribe to our newsletter'
                        defaultChecked
                    /> */}

                    <MDBBtn type='submit' className='mb-4' block onClick={submitdata}>
                        Sign in
                    </MDBBtn>

                    <div className='text-center'>
                        <p>
                            Not a member? <a href='#!'>Register</a>
                        </p>
                        <p>or sign up with:</p>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>

                    </div>
                </form>
            </div>
        </>
    );
}