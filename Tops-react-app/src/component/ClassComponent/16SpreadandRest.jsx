import React, { Component } from 'react'

export default class SpreadandRest extends Component {
    render() {
        //rest
        const addition = (a, ...b) => {
            console.log("called addition value of a : ", a, "value of b ", b);
        }
        addition(50, 60, 80, 90)
        addition(50, 60)

        //spread
        const additionSpread = (a, b, c, d) => {
            console.log("called addition value of a : ", a, b, c, d);
        }
        additionSpread(50, 60, 80, 90)
        additionSpread(50, 60)
        const numbers = [1, 3, 5, 7]
        additionSpread(numbers[0],numbers[1],numbers[2],numbers[3])
        additionSpread(...numbers)
        additionSpread(numbers)

        // rest in object 
        var student = {
            name : "bhavya" ,
            age : 22 ,
            course : ["gd" , "frontend"] 
        }
        const {name , ...rest} = student ;
        console.log(name , rest) 

        // spread in object
        var newstudent = {
            ...student,
            name : "hardik"
        }
        console.log(newstudent)
        return (
            <>
                <>
                    <h1>check console for better understanding of spread and rest with array & object</h1>
                </>
            </>
        )
    }
}
