import React, { useState } from "react";
import Increment from "./Increment";
import Todolist from "./Todolist";

const Todoapp = () => {
    const [inputlist, setInputlist] = useState("");
    const [Item, setItem] = useState([]);
    const Inp = (event) => {
        setInputlist(event.target.value);
    }
    const listofItem = () => {
        setItem((oldItem) => {
            return [...oldItem, inputlist];
        });
        setInputlist("");
    };
    const deleteItem = (id) => {
        console.log("deleted")
        setItem((oldItem) => {
            return oldItem.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }


    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-item-center">
                <div className="text-bg-dark p-5 my-3 rounded-4">
                    <div className="text-center fs-1 border-bottom border-3 pb-2 mb-4">ToDo List</div>
                    <input className="border-0 border-bottom border-success" type="text" placeholder="add a item" onChange={Inp} value={inputlist} />
                    <button type="button" className="btn btn-outline-light  rounded-circle mx-2 fs-4 px-2 py-0" onClick={listofItem} > + </button>
                    <div>
                        <ol>
                            {/* <li>{inputlist}</li> */}
                            {Item.map((itemval, index) => {
                                return <Todolist
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteItem}
                                />;
                            })}
                        </ol>
                    </div>
                </div>
            </div>
            <Increment/>
            
        </>
    )
}

export default Todoapp;