import React, { Component } from 'react'
import styled from 'styled-components';

export default class CssExample extends Component {
    render() {
        const pstyle = {
            color: "blue",
            backgroundColor: "orange"
        }
        const Btn = styled.button`
        color: green;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        `;
        const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
        `
        const txt = {
            color: "blue" ,
            backgroundColor: "yellow"
        }
        const fsize = {
            fontSize: "60px"
        }
        return (
            <div>
                <p style={pstyle} >normalcss</p>
                <p style={{ color: "blue", backgroundColor: "orange" }} >normalcss</p>
                <Btn>stylecomponent</Btn>
                <Wrapper>section</Wrapper>
                <h1 style={{...txt , ...fsize}}>something</h1>
                <h1 style={{  color: "blue", background: "yellow", fontSize: "60px"  }}>somehting</h1> 
            </div>
        )
    }
}
