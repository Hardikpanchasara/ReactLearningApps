import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (params) => {
    return (
        <>
            <section id='header' className=' d-flex align-item-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto ">
                            <div className="row ">
                                <div className="col-12 col-lg-6 pt-5 pt-lg-0 d-flex justify-content-center flex-column ">
                                    <h1 className='my-2'>{params.name} <strong className='text-primary'>webtech</strong>.</h1>
                                    <h2 className='my-2'>we are the team of telented developer with more than 5 years of experience.</h2>
                                    <NavLink to={params.visit} >
                                    <button type="button" class="btn btn-outline-primary col-lg-3 my-3 col-12">{params.btname}</button>
                                    </NavLink>
                                </div>
                                <div className="col-12 col-lg-6 ">
                                    <img className='img-fluid animated' src={params.imgsrc} alt="team" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common