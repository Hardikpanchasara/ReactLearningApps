import React, { Component } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

export default class State extends Component {
    datamamber  = "something data member"
    constructor(){
        super()
        this.state = {
            stateData:"init",
            valueForIncreDec:0,
            turnonoff:true
        }
    }
    clickHandleEvent=()=>{
        console.log("called");
        this.dataMember = "Change..."
        this.setState({ stateData:"other data" })
    }
    Increment = () => {
        this.setState({valueForIncreDec : this.state.valueForIncreDec + 1})
    }
  render() {
    let data = "something ... "
    return (
      <>
      {data}
       <br />
      {this.datamamber} 
      <br />
      {this.state.stateData}
      <MDBBtn className='mx-2' color="secondary" onClick={this.clickHandleEvent} > click </MDBBtn>
      <br />
      <br />
      <MDBBtn className='mx-2' color="secondary" onClick={() => {this.setState({valueForIncreDec : this.state.valueForIncreDec - 1})}} > DECREMENT </MDBBtn>
      {this.state.valueForIncreDec}
      <MDBBtn className='mx-2' color="secondary" onClick={this.Increment} > INCREMENT </MDBBtn>
      <br />
      <br />
      <MDBBtn className='mx-2' color="secondary" onClick={() => {this.setState({turnonoff : !this.state.turnonoff})}} > {this.state.turnonoff ? "on" : "off"} </MDBBtn>
      <br />
      <br />

        
      </>
    )
  }
}
