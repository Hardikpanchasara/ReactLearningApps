import React, { Component } from 'react'

export default class UncontrolledCompo extends Component {
  constructor(props) {
    console.log("called")
    super(props)
    this.input = React.createRef()
    this.textarea = React.createRef()

  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.input);
    // console.log(this.input.current);
    console.log(this.input.current.value);
    console.log(this.textarea.current.value);
  }
  render() {

    return (
      <>
        <div className="container">

          <p>In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.</p>

          <p> A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.</p>

          <p>An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.</p>

          <br /><br />

          <form method="post" onSubmit={this.handleSubmit}>
            <input type="text" ref={this.input} name='uname' id='uname' /><br />
            <textarea ref={this.textarea} name="" id="" cols="30" rows="5"></textarea><br />
            <input type="submit" name='btn' id="btn" />            
          </form>

          <br /><br />
        </div>
      </>
    )
  }
}
