//import 
const {createStore} = require('redux')

//intial

const initialstate = {
    bal : 5000 
}

//reducer 

const reducer = (state = initialstate , action) => {
   switch(action.type){
    case 'DEPOSIT' : 
    return{
        ...state,
        bal : action.value
    }
    case 'WITHDRAW' : 
    return {
        ...state,
        bal : action.value
    }
    default : 
    state ;
   }
}

// store 

const store = createStore(reducer) 

store.subscribe(() => {
    console.log(store.getState())
})


//action

store.dispatch({type:'DEPOSIT' , value: 1000})
store.dispatch({type:'WITHDRAW' , value: 4000})