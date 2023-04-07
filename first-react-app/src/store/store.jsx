import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./slice/Userslice";


const store = configureStore({
    reducer : {
        users : Userslice.reducer , 
    },
}) 

export default store ;