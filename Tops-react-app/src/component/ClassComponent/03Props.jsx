import React, { Component } from 'react'
import Propscard from './03Propscard'
import PropscardData from './03PropscardData'

export default class Props extends Component {
    render() {
        return (
            <>
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            PropscardData.map((val,ind) => {
                                return (<Propscard key={ind} imgsrc={val.imgsrc} title={val.title} />)
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
