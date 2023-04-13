import React, { Component } from 'react'

export default class StateChild extends Component {
    inputHandleChange = (e) => {
        
        console.log("input handle change in child" , e.target.value )
        this.props.parentmethod(e.target.value) 
        // this direct call parent method on onchange on this input and pass the value

    }
  render() {
    return (
      <div>
        <input type="text" onChange={this.inputHandleChange} />
      </div>
    )
  }
}


