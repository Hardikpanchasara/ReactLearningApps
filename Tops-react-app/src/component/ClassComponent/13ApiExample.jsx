import React, { Component } from 'react'

export default class ApiExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetchdata : {}
        }
        fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()).then(res => {
            this.setState({fetchdata : res})
        })
    }
  render() {
    return (
      <div>
        {JSON.stringify(this.state.fetchdata)}
      </div>
    )
  }
}
