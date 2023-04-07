import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </>
);


// spread operator
// const fullname = ["hardik", "panchasara"];
// const detail = [22, "male"];
// const biodata = [...fullname,22,"male"]; // case 1
// const fullbio = [...fullname , ...detail]; // case 2
// let [first,...remaining] = fullbio; //case 3
// const my = {
//     fname : "hardik",
//     lname : "panchasara"
// }
// const mydetail = {
//     ...my ,
//     age: 22,
//     gender : "male"
// }
// console.log(mydetail)
// console.log(fullname);
// console.log(biodata);
// console.log(fullbio);
// console.log(first);
// console.log(remaining);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
