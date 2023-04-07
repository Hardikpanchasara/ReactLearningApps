import React from "react";


const Todolist = (params) => {
    return (
        <>
            <div>
                <i className="fa-solid fa-xmark text-bg-danger px-2 py-1 rounded-circle" onClick={() => {
                    params.onSelect(params.id)
                }}></i>
                <li className="d-inline ms-4">{params.text}</li>
            </div>
        </>
    )
}

export default Todolist; 