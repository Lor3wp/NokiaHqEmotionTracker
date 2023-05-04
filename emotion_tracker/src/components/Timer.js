import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [buttonActive, setBA] = useState(true);
  const [time, setTime] = useState(0);
  const timerTimeMs = 3600000;

  const timerStart = (e) => {
     e.preventDefault();
     setBA(false) 
     const dateNow = Date.now() 
     const timeRemaining = timerTimeMs - (dateNow - localStorage.getItem('timer'));
     setTime(timeRemaining > 0 ? timeRemaining : 0); 
     localStorage.setItem('timer', dateNow); 
    };
  
  const timerTick = () => { 
    if (localStorage.getItem('timer')){ 
      let res = Date.now() - localStorage.getItem('timer'); 
      setTime((timerTimeMs-res) > 0 ? timerTimeMs-res : 0);
      if (res > timerTimeMs){
        setBA(true);
      } else {
        setBA(false)
      }
    } 
  };

  /*const timerTick = () => {
    console.log("timerTick ~ ");
    if (localStorage.getItem('timer')){
      let res = Date.now() - localStorage.getItem('timer');
      setTime((timerTimeMs-res) > 0 ? timerTimeMs-res : 0);
      console.log(res);
      if (res > timerTimeMs){
        setBA(true);
      } else {
        setBA(false);
      }
    }
  };*/

  useEffect(() => {
    let timer = setInterval(() => {
      timerTick();
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {Math.floor(time/1000/60)} mins, {Math.floor((time/1000)%60)} secs
        </p>
        <button disabled={!buttonActive} onClick={(e) => {timerStart(e)}}>
          click me
        </button>
      </header>
    </div>
  );
}

export default Timer;
