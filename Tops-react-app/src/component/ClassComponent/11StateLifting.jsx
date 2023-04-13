import React, { Component } from 'react'
import StateChild from './11StateChild'

export default class StateLifting extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputdata : ""
        }
    }
    parMethod = (value) => {
        console.log("parent file get value" , value)
        this.setState({inputdata : value})
    }
  render() {
    return (
      <div>
        <div>
            {this.state.inputdata}
        </div>
        parent data
        <StateChild parentmethod={this.parMethod} />
        <br /><br /><br />
      </div>
    )
  }
}
