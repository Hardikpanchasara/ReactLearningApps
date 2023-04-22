import React, { Component } from 'react'
import img1 from "../../img/app.webp"

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

        <img src="https://picsum.photos/id/537/500/800" alt="" />
        <br /><br />
        <img src={img1} alt="" />
        <br /><br />
        {/* {JSON.stringify(process.env)} */}
        <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="" />
        <img src={`/logo512.png`} alt="" />
      </div>
    )
  }
}
