import React, { useRef } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { FetchSerchProducts } from '../Redux/Features/ProductSlice';

export default function SerchBox() {
    const serchref = useRef()
    const dispatch = useDispatch()

    const handleChange = () => {
        const serchtext = serchref.current.value
        dispatch(FetchSerchProducts({serchtext}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <form onSubmit={handleSubmit}>
                    <MDBInput
                        label='Example label'
                        id='form1'
                        type='text'
                        placeholder='Serch here'
                        ref={serchref}
                        onChange={handleChange}
                    />
                </form>
            </div>
        </>
    );
}