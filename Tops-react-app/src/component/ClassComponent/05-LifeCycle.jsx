import { MDBBtn } from 'mdb-react-ui-kit';
import React, { Component } from 'react'
import lifecycle from '../../img/life-cycle-class-compo.webp'


export default class LifeCycle extends Component {
    constructor(props) {
        console.log("constructor");
        super(props)
        this.state = {
            turnonoff: true
        }
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    shouldComponentUpdate() {
        console.log("ShouldComponentUpdate")
        return true
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render() {
        console.log("render");
        return (
            <div>
                <MDBBtn className='mx-auto d-block' color="secondary" onClick={() => { this.setState({ turnonoff: !this.state.turnonoff }) }} > {this.state.turnonoff ? "on" : "off"} </MDBBtn>
                <div className="col-8 my-5 mx-auto">
                    <img src={lifecycle} alt="..." />
                </div>
            </div>
        );

    }
}
