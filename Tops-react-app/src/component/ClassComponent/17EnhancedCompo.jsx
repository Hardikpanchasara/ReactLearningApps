import React, { Component } from 'react'

const EnhancedCompo = (OriginalComponent) => {

    class Newcompo extends Component {
        clickHandle = () => {
            console.log("called inside enhanced")
        }
        render() {
            console.log("enhanced component called")
            return (
                <div>
                    <OriginalComponent clickHandle={this.clickHandle} />
                </div>
            )
        }
    }

    return Newcompo;
}

export default EnhancedCompo
