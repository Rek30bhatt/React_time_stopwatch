import { useState } from "react";
import "./Clock.css";


import { Routes, Route} from "react-router-dom";
import Stopwatch from "./Stopwatch";
import Button from "./Button";


function Clock(props) {
  const [currenttime, getCurrentTime] = useState();
  const [stop, getStop] = useState(true);

  const [clktoggle, getToggle] = useState(true);
  const [stoptoggle, getStopToggle] = useState(false);

  const settime = () => {
    const current = new Date().toLocaleTimeString();

    // var newdate = (current.getHours() + ":"  + current.getMinutes())

    // if(newdate < 23 && newdate > 12 ){
    //   newdate= newdate + "AM"
    // }
    // else
    // {
    //   newdate = newdate + "PM"
    // }
    getCurrentTime(current);
  };
  setInterval(settime, 100);

  const watchStart = () => {
    getToggle(false);

    getStop(<Stopwatch />);
  };
  const clk = () => {
    getToggle(true);
    getStop(false);
    getStopToggle(false);
  };
  var res = currenttime;
  return (
    <>
      <div className="main-section">
        <div className="clock-holder">
          <div className="stopwatch">
            {clktoggle ? <h1>CLOCK</h1> : null}
            {clktoggle ? res : null}
            {stoptoggle ? <Stopwatch /> : null}
            <div>{stop}</div>
           <Button link = {"path"}  link1 = {"path1"} click = {clk} onclick = {watchStart} text1={"CLOCK"} text2={"STOPWATCH"}></Button>
          
              <Routes>
                <Route path="/StopWatch" element={<Stopwatch />} />
              </Routes>
          
          </div>
        </div>
      </div>
    </>
  );
}
export default Clock;
