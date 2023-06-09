
import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from '../constants/Userconstants';

const UserReducer = (state = {users : []} ,action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
        return {loading : true , users : []}

    case GET_USER_SUCCESS : 
        return { loading : false , users : action.payload}

    case GET_USER_FAIL :
        return {loading : false , error : action.payload}
  
    default:
        return state ;
  }
}

export default UserReducer
