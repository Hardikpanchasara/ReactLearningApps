import React, { Component } from 'react'
import EnhancedCompo from './17EnhancedCompo'
class Hocmain extends Component {
  render() {
    console.log("Main component called")
    const {clickHandle} = this.props
    return (
      <div>
        <button onClick={clickHandle}>btn click main component</button>
      </div>
    )
  }
}

export default EnhancedCompo(Hocmain)
