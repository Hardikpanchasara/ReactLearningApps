import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="main_heading py-3 bg-light ">
                <div className="container">
                    <div className="my-5 text-center">
                        <h2 className=" display-4">Please Fill Up !</h2>
                        <hr className="w-25 mx-auto" />
                        <p>In a short-time,we contact you.</p>
                    </div>
                    <div className="w-50 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput0" className="form-label">Name:</label>
                                <input type="text" className="form-control" id="exampleFormControlInput0" autoComplete="on" required placeholder="enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address:</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" autoComplete="on" required placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Mobile No:</label>
                                <input type="tel" className="form-control" id="exampleFormControlInput2" autoComplete="on" required placeholder="xxxxxxxxxx" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label pe-3">Gender:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">female</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" required rows={5} defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact