import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

// import './index.css';
// import App from './App';
// import Watch from "./Watch"
// import CurrentTime from './Hacakathon/CurrentTime';

// import Event from "./Event"
// import Form from "./Form"

// import Stopwatch from "./HackTimestopwatch/Stopwatch";
import Clock from "./HackTimestopwatch/Clock";

// import Button from "./Button"
// import Timerapp from "./TimerApp"

ReactDOM.render(
  <BrowserRouter>
    <>
    {/* <Watch /> */}
     {/* <Stopwatch />  */}
     {/* <CurrentTime /> */}
   
     <Clock />
   
      {/* <App /> */} 
      {/* <Watch /> */}
      {/* <Timerapp /> */}
    
      {/* <Event /> */}
      {/* <Form /> */}
      </>
      </BrowserRouter>
  
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

