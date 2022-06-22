import "./Stopwatch.css" ; 
import {useState} from 'react';
// import './Clock.css'



// import {Link} from 'react-router-dom'
function Stopwatch(props){
    const [watch, setWatch] = useState({h:0,m:0,s:0});
    const[interval, setIntervalID]=useState();
    const[showbtn,setBtn] =  useState(true);
    
   
        let updatesec = watch.s;
        let updatemin = watch.m;
        let updatehrs = watch.h;
        console.log(watch.h);
        const start =()=>{
        run()
        setBtn(0)
        setIntervalID(setInterval(run,1000));
        setBtn(!showbtn)
        }
    const run =()=>{
     if(updatemin === 60){
            updatehrs++;
            updatemin=0;
        }
        if(updatesec === 60){
    updatemin++;
    updatesec=0;
     }
    updatesec++;
    return setWatch({h:updatehrs,m:updatemin,s:updatesec});
    }
    const stop=()=>{
    clearInterval(interval);
    setBtn(!showbtn)
  
    }
    const reset = ()=>{
        clearInterval(interval);
        setWatch({h:0,m:0,s:0});
    }
   
     return(<>
     <div className="main_container">
        <h2>STOPWATCH</h2>
        {/* <Link to ={props.test}>{props.test}</Link> */}
         <button className="rst" onClick={reset}>RESET</button>
         <div className='container'>
        <div className="time"> 
    <span className="tic">{watch.h < 10?"0" + watch.h+":" :watch.h+":"}</span>
    <span className="tic">{watch.m < 10?"0" + watch.m +":":watch.m +":"}</span>
    <span className="tic">{watch.s < 10?"0" + watch.s:watch.s}</span>
    </div>
  <div className="btndiv">
  

 {showbtn?<button className="btnstart" onClick={start}>START</button>:<button className="btnstart" onClick={stop}>STOP</button>}
 </div>
 </div>
 </div>
</>)
}
export default Stopwatch;