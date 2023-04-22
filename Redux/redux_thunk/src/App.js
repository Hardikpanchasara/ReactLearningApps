import './App.css';
import React,{useState , useEffect} from 'react';
import {useDispatch , useSelector} from "react-redux"
import { UserAction } from './redux/action/UserAction';
import User from './components/User';

function App() {
  const dispatch = useDispatch()
  const userList = useSelector(state => state.userList)
  const {loading, users , error} = userList
  useEffect(() => {
    dispatch(UserAction())
  } , [dispatch])
  return (
    <div className="container">
    <h1>REDUX THUNK </h1>
    {loading ? <h2>loading...</h2> : error ? <h2>{error}</h2> : <User users={users} /> }
    </div>
  );
}

export default App;
