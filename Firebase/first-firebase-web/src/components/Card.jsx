import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import { useFirebase } from '../context/Firebase';

const Card = (props) => {
    const firebase = useFirebase()
    const [url , setUrl] = useState(null)

    useEffect(()  => {
        firebase.getImgurl(props.imgURL).then(urldata => setUrl(urldata))
    },[])
    return (
        <div className="col-md-4 col-10 mx-auto" key={props.id}>
            <MDBCard className='h-100'>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay h-100'>
                    <MDBCardImage className='card-img-top h-100' src={url} fluid />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>{props.name}</MDBCardTitle>
                    <MDBCardText>
                        this {props.name} sold by {props.sellername} .
                    </MDBCardText>
                    <MDBCardText>
                        Price : {props.price}
                    </MDBCardText>
                    <MDBBtn href='#'>Buy</MDBBtn>
                    {url}
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default Card