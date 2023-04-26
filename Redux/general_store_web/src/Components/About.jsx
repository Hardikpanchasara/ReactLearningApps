import React from 'react'

const About = () => {
    return (
        <>
            <section className="main_heading my-5  ">
                <div className="container ">
                    <div>
                        <h2 className="text-center display-4">About Us</h2>
                        <hr className="w-25 mx-auto" />
                    </div>
                    <div>
                        <div className="row my-5 ">
                            <div className="col-xxl-6 col-lg-6 col-md-6 col-12 ">
                                    <img src="https://source.unsplash.com/random/?about/" className="img-fluid about-img" alt="about-img" />
                            </div>
                            <div className="col-xxl-6 col-lg-6 col-md-6 col-12 d-flex flex-column align-items-start justify-content-center">
                                <h1>Our Journey</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, dolores, amet est omnis
                                    reprehenderit non ab nulla accusamus ipsum reiciendis asperiores! Nobis aperiam est vel,
                                    soluta cupiditate ratione eaque mollitia eos neque perferendis rem debitis vero cum
                                    perspiciatis eum minus?</p>
                                <button type="button" className="btn btn-outline-info" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="hiii">Check More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About