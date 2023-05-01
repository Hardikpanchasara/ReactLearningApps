import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { FetchSingleProductById } from '../Redux/Features/ProductSlice'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import Loader from './Common/Loader';

const ProductDetails = () => {
  const dispatch = useDispatch()
  const { loading, error , product } = useSelector(state => ({ ...state.app }))
  const { id } = useParams()
  useEffect(() => {
    dispatch(FetchSingleProductById({ id }))
  }, [dispatch, id])
  return (
    <>
      {loading ? <Loader /> : error ? error.message :
        <section className="main_heading my-5  ">
          <div className="container ">
            <div className="col-6 mx-auto">
              <div>
                <h2 className="text-center display-4">Your Products</h2>
                <hr className="w-25 mx-auto" />
              </div>
              <div>
                <MDBCard className='h-100'>
                  <MDBCardImage className='h-50' src={product.image} position='top' alt='...' />
                  <MDBCardBody className='d-flex flex-column justify-content-between '>
                    <MDBCardTitle className='fw-bolder'>{product.title}</MDBCardTitle>
                    <MDBCardText>
                      {product.description}
                    </MDBCardText>
                      {/* Rating :{ JSON.stringify(product.rating.rate) } */}
                    <MDBCardText>
                      Rate :{ product.rate }
                    </MDBCardText>
                    <MDBCardText>
                      Review :{ product.count }
                      {/* Review :{product.rating.count} */}
                    </MDBCardText>
                    <MDBCardText>
                      Price : {product.price}
                    </MDBCardText>
                    <Link to="/" className='btn btn-primary mt-3'>buy</Link>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default ProductDetails
