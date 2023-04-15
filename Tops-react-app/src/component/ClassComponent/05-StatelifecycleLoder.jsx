import React, { Component } from 'react'

export default class StatelifecycleLoder extends Component {
    constructor(props) {
        super(props)
        // Declare State with default value for loader enable disable functionalities START
        this.state = { data: "something", loader: false }
        // Declare State with default value for loader enable disable functionalities END

    }
    componentDidMount() {
        console.log("componentdidmount");
        setTimeout(() => {
            this.setState({ loader: true })
        }, 2000);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        setTimeout(() => {
            console.log("componentDidUpdate time out");
            this.setState({ loader: false })
        }, 4000);
    }
    render() {
        let HtmlDisp = null;
        this.state.loader ? HtmlDisp = <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" /> : HtmlDisp = "inside else"
        return (
            <>
                {JSON.stringify(this.state.loader)}
                {HtmlDisp}
                <button onClick={() => this.setState({ data: "Testing" })}>Click</button>
                <p><strong>State</strong>{this.state.data}</p>
            </>
        )
    }
}
