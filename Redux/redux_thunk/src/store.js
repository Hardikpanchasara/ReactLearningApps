import {createStore , combineReducers , applyMiddleware } from "redux" 
import thunk from "redux-thunk"
import {composeWithDevTools} from "@redux-devtools/extension"
import UserReducer from "./redux/reducers/UserReducer"

const reducer  = combineReducers({
     userList : UserReducer , 
})
const initialvalue = {}
const middleware = [thunk]
const store = createStore(reducer , initialvalue , composeWithDevTools(applyMiddleware(...middleware)))

export default store 
