import React, { useEffect, useState } from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';



export default function Loginpage() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const firebase = useFirebase()
    console.log(firebase)

    const userdata = (e) => {
        // const value = e.target.value
        // const name = e.target.name
        const { name, value } = e.target
        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const submitdata = async (event) => {
        event.preventDefault()
        await firebase.signinUserWithEmail(user.email, user.password)
        setUser({
            email: "",
            password: "",
        })
    }

    const navigate = useNavigate()
    useEffect(() => {
        if (firebase.isUserLoggedin) {
            navigate("/")
        }
    }, [firebase, navigate])


    return (
        <>
            <div className="container mt-5 col-4">
                <form>
                    <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' name='email' onChange={userdata} required value={user.email} />
                    <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' name='password' onChange={userdata} required value={user.password} />

                    <MDBRow className='mb-4'>
                        <MDBCol className='d-flex justify-content-center'>
                            <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                        </MDBCol>
                        <MDBCol>
                            <a href='#!'>Forgot password?</a>
                        </MDBCol>
                    </MDBRow>

                    <MDBBtn type='submit' className='mb-4' block onClick={submitdata} >
                        Sign in
                    </MDBBtn>

                </form>
                <div className='text-center'>
                    <p>
                        Not a member? <a href='#!'>Register</a>
                    </p>
                    <p>or sign up with:</p>

                    {/* <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn> */}

                    <MDBBtn floating color="secondary" className='mx-1' onClick={firebase.signinwithgoogle}>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    {/* <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn> */}
                </div>
            </div>
        </>
    );
}