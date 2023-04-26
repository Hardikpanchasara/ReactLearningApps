import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Features/ProductSlice";

const store = configureStore({
    reducer : {
        app : ProductSlice ,
    }
})

export default store ;