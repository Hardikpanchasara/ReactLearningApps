import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        <div className="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto" key={props.id}>
            {/* <MDBCard >
                <MDBCardImage src={props.img} position='top' alt='...' />
                <MDBCardBody >
                    <MDBCardTitle>{props.title}</MDBCardTitle>
                    <MDBCardText>
                        {props.description}
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard> */}
            <MDBCard className='h-100'>
                <MDBCardImage className='h-50' src={props.img} position='top' alt='...' />
                <MDBCardBody className='d-flex flex-column justify-content-between '>
                    <MDBCardTitle className='fw-bolder'>{props.title}</MDBCardTitle>
                    <MDBCardText>
                        {props.description}
                    </MDBCardText>
                    <Link to={`/details/${props.id}`} className='btn btn-primary'>Check Details</Link>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}