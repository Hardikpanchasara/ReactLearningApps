import { createSlice } from "@reduxjs/toolkit";


const Userslice = createSlice({
    name : "user" ,
    initialState: [] ,
    reducers : {
        addUser(state ,action) {
            state.push(action.payload)
            // console.log(action.payload)
        } ,
        removeUser (state ,action) {
            // console.log("hi" + action.payload)
            state.splice(action.payload , 1)
        },
        deleteAllUser(state,action) {
            return  []
        },
    },
    

       // if action is supposed to be used by one reducer  then used reducers
       // if action is supposed to be used by multiple reducer then used ExtraReducers


    extraReducers(builder){
        builder.addCase(Userslice.actions.deleteAllUser , () => {
            return []
        })
    },
    
})

export default Userslice;
export const {addUser , removeUser , deleteAllUser} = Userslice.actions ;