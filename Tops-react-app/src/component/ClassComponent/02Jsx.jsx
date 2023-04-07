import React, { Component } from 'react'

export default class Jsx extends Component {
  render() {
    const user = {
        firstname : "hardik",
        lastname: "panchasara",
    }
    let something = "My site Title";
    const heading = <h1>{something}</h1>
    return (
      <div>
        {heading}
        2+2 = {2+2}
        <p>fullname : {user.firstname} {user.lastname}</p>
      </div>
    )
  }
}
