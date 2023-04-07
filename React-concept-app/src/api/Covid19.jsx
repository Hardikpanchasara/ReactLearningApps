
import React, { useEffect, useState } from 'react'
import "../api/Covid-19.css"


const Covid19 = () => {
    const [data,setdata] = useState([]);
    const getcovidData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json")
        const actualData = await res.json()
        // console.log(actualData.statewise)
        setdata(actualData.statewise)
    }
    useEffect(() => {
        getcovidData()
    }, [])
    return (
        <>
            <div>
                <div className='container-fluid mt-5'>
                    <div className='main-heading'>
                        <h1 className='mb-5 text-center'> <span className='fw-bold' > India </span> covid-19 Dashboard</h1>
                    </div>
                    <div className='table-responsive'>
                        <table className='table table-hover'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>state</th>
                                    <th>confirmed</th>
                                    <th>recoverd</th>
                                    <th>deaths</th>
                                    <th>active</th>
                                    <th>update</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((curdata,index) => {
                                return(

                                <tr key={index}>
                                    <td>{curdata.state}</td>
                                    <td>{curdata.confirmed}</td>
                                    <td>{curdata.recovered}</td>
                                    <td>{curdata.deaths}</td>
                                    <td>{curdata.active}</td>
                                    <td>{curdata.lastupdatedtime}</td>
                                </tr>
                                )

                            })}

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Covid19;