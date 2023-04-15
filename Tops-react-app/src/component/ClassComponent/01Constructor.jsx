import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(props) {
        super(props);
        console.log("called")
    }
    render() {
        return (
            <div>
            <p>constructor is method which is invoke by default when component called</p>
            <p>render is also called by default but render is use for the give rersponse to component </p>
            <p>constructor is use for the initiate some value</p>
            </div>
        )
    }
}
