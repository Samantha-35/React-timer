import React, {useState,useEffect} from "react"; 
import { render } from "react-dom";
import "../css/style.css";



// export const Hello = () => {
//    return <p>{"Hello, World !"}</p>;
// }

export function Pomodoro(){
   const[minutes, setMinutes] = useState(25);
   const[seconds, setSeconds] = useState(0);
   const[displayMessage, setDisplayMessage] = useState(false);
   const[num, setNum] = useState(5);
   const[firstRender, setfirstRender] = useState(true);
   const[isCliked, setisCliked] = useState(false);
   const[isPaused, setIsPaused] = useState(true);

//these are flags


let StartTimer = ()=>{

   let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0){
         if (minutes !== 0) {
            setSeconds(59)
            setMinutes( minutes - 1);
         } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;
          
          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(displayMessage);
         }
       }else{
          setSeconds(seconds-1);
       }
   },1000)

}
// the useEffect is executed in the first rendering by default
   useEffect(() => {
     if (firstRender == true) {
      setfirstRender(false);
     return 
     }
     if (isPaused == true){
         return   
     }
     StartTimer();     
   }, [seconds, isCliked, isPaused]); 

   const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
   const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

   function clickStart (){
    setisCliked (true);
    setIsPaused(!isPaused);
   } 
   function reset (){
      setMinutes(25); 
      setSeconds(0);
      setIsPaused(true);
   }

const incNum  = () => {
   console.log("click")
   setMinutes(minutes + 1);
}
const decNum = () => {
   if(minutes > 0){
      setMinutes (minutes - 1);
} else {
alert("ZERO is the limit");
   setMinutes(0);
}


   return(
   <>
   <div className="main_div">
      <div className="center_div">
         <h2>{num}</h2>
         <div className="btn_div">
            <button onClick={incNum}>More</button>
            <button onClick>Less</button>
         </div>

      </div>
       
   </div>
   </>
   )
}
   return ( 
   <div className="pomodoro">
      {/* <div className="message">
      {displayMessage ? <h1> Break! Here is the new timer : </h1>: 
      "Hello"
      }
      </div> */}
       <div className="buttons">
         <button onClick={clickStart} className="pause">{isPaused ? "start":"pause"}</button>
         <button onClick={reset} className="reset">reset</button>
            < button onClick = {incNum} className = "incNum">+</button> 
            < button onClick ={decNum}  className = "decNum">-</button> 
      </div> 
      <div></div>

      <div className="circle">
      {/* <h1>
         <p className="break">Tik toc, tik toc: </p>
      </h1> */}
         <div className="circle-out">
            <div className="timer">{timerMinutes}:{timerSeconds}</div>
            <div className="circle-in"></div>
         </div>
      </div>
   </div>
   )
}

