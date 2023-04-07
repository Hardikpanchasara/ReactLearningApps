import { MDBBtn } from 'mdb-react-ui-kit'
import React, { Component } from 'react'

export default class ConditionalRendaring extends Component {
    constructor(props){
        super(props)
        this.state= {
            status: true ,
        }
    }
    loginChange=()=>{
        this.setState({status:!this.state.status})
    }
  render() {
    let loginbtn = ""
    const count = 1 ;
    return (
      <>
         {count && <h1>Messages: {count}</h1>}
         <br />
         {loginbtn}
         <br />
         <br />
         <MDBBtn className='mx-auto d-block' color="secondary" onClick={this.loginChange} > {this.state.status ? "Login" : "Logout"} </MDBBtn>
         <br />
         <br />
         <MDBBtn className='mx-auto d-block' color="secondary" onClick={() => {this.setState({status : !this.state.status})}} > {this.state.status ? "Login" : "Logout"} </MDBBtn>
         <br />
         <br />
      </>
    )


            // if (this.state.status) {
        //     return (
        //         <>
        //             <button onClick={this.loginChange}>Logout</button>
        //             True      
        //         </>
        //     );
        // }else{
        //     return (
        //         <>
        //         <button onClick={this.loginChange}>Login</button>
        //             False
        //         </>
        //     );
        // }
  }
}
