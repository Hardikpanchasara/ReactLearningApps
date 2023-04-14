import React, { Component } from 'react'

export default class ListKeys extends Component {
  render() {


    const arr = [1,2,3,4,5,6]
    arr.map((numb) => {console.log(numb)})
    // let dataOfArr = arr.map((numb) => <li>{numb}</li>)
    // let dataOfArr = arr.map((numb) => {return<li key={numb}>{numb}</li>})
    let dataOfArr = arr.map((value, key) => {
        console.log(key);
        return <li key={key}>{value}</li>
    })
    // let dataOfArr = arr.forEach(arr => {
    //       console.log(arr);
    //   })


    const posts = [
        { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
        { id: 2, title: 'Installation', content: 'You can install React from npm.' }
    ];
    let content = posts.map((data, key) => {
        console.log(data)
        console.log(data.id)
        console.log(data.title)
        console.log(data.content)
        return <tr key={key}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.content}</td>
        </tr>
    })

    return (
      <>
        {dataOfArr}
        
        <table className='table table-border'>
            <tbody>
                {content}
            </tbody>
        </table>
      </>
    )
  }
}
