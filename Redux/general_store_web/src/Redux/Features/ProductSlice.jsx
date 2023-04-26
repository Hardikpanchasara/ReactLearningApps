import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const FetchProductById = createAsyncThunk("products/fecthProducts" , async () => {
    return fetch('https://fakestoreapi.com/products/').then(res=>res.json())
})

export const FetchSingleProductById = createAsyncThunk("singleproduct/fetchsingleproduct" , async ({id}) => {
    return fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
})

export const FetchSerchProducts = createAsyncThunk("serch/fetchserch" , async ({serchtext}) => {
    return fetch(`https://fakestoreapi.com/products/category/${serchtext}`).then(res=>res.json())
})


const ProductSlice = createSlice({
    name : "Products" ,
    initialState: {
        loading : false, 
        products : [] ,
        error : null ,
        product : [] 
    },
    extraReducers : {
        [FetchProductById.pending] : (state , action) => { 
            state.loading = true
        } ,
        [FetchProductById.fulfilled] : (state ,action ) => {
            state.loading = false 
            state.products = action.payload ;
        },
        [FetchProductById.rejected] : (state , action ) => {
            state.loading = false
            state.error = action.error ;
        },
        [FetchSingleProductById.pending] : (state , action) => { 
            state.loading = true
        } ,
        [FetchSingleProductById.fulfilled] : (state ,action ) => {
            state.loading = false 
            state.product = action.payload ;
        },
        [FetchSingleProductById.rejected] : (state , action ) => {
            state.loading = false
            state.error = action.error ;
        },
        [FetchSerchProducts.pending] : (state , action) => { 
            state.loading = true
        } ,
        [FetchSerchProducts.fulfilled] : (state ,action ) => {
            state.loading = false 
            state.products = action.payload ;
        },
        [FetchSerchProducts.rejected] : (state , action ) => {
            state.loading = false
            state.error = action.error ;
        },
    },
})

export default ProductSlice.reducer ;