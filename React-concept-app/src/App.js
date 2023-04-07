import './App.css';
import React from 'react';
import SlotMain from './SlotMain';
import Hooks from './Hooks';
import Forms from './Forms';
import Todoapp from './Todoapp';
import Mui from './Mui/Mui';
import Myaccordion from './accordion/Myaccordion';
import Context from './context/Context';
import UseEffect from './context/UseEffect';
import Pokemon from './api/Pokemon';
import Covid19 from './api/Covid19';
import Routerapp from './Router/Routerapp';
import Reduxapp from './Redux/Reduxapp';




function App() {
  let greeting = "";
  let currdate = new Date();
  currdate = currdate.getHours();
  const cssstyle = {}

  if (currdate >= 2 && currdate < 12) {
    greeting = "good morning";
    cssstyle.color = "green";
  } else if (currdate >= 12 && currdate < 16) {
    greeting = "good afternoon";
    cssstyle.color = "orange";

  } else {
    greeting = "good evening";
    cssstyle.color = "red";
  }
  return (
    <>
      {/* <h1 className='text-center mt-5 pt-5'> hello sir, <span style={cssstyle}> {greeting} </span> </h1> */}
      {/* <SlotMain/> */}
      {/* <Hooks/> */}
      {/* <Forms/> */}
      {/* <Todoapp /> */}
      {/* <Mui /> */}
      {/* <Myaccordion /> */}
      {/* <Context /> */}
      {/* <UseEffect /> */}
      {/* <Pokemon /> */}
      {/* <Covid19 /> */}
      <Routerapp/>
      <Reduxapp />
      
    </>
  );
}



export { App };
