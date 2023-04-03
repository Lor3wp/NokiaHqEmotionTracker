import React, { useState, useEffect } from 'react';
import EmotionButton from './EmotionButtons';

const Timer = () => {
  const [buttonActive, setBA] = useState(true);
  const [aika, setAika] = useState(0);
  const timerTimeMs = 3600000;

  const timerStart = (e) => {
    console.log("timerStart ");
    e.preventDefault();
      setBA(false);
      const nyt = Date.now()
      localStorage.setItem('timer', nyt);
  };
  const timerTick = () => {
    console.log("timerTick ~ ");
    if (localStorage.getItem('timer')){
      let res = Date.now() - localStorage.getItem('timer');
      setAika((timerTimeMs-res) > 0 ? timerTimeMs-res : 0);
      console.log(res);
      if (res > timerTimeMs){
        setBA(true);
      } else {
        setBA(false);
      }
    }
  };

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
          {Math.floor(aika/1000/60)} mins, {Math.floor((aika/1000)%60)} secs
        </p>
        <EmotionButton onClick={(e) => {timerStart(e)}}/>
        {/* <button disabled={!buttonActive} onClick={(e) => {timerStart(e)}}>
          click me
        </button> */}
      </header>
    </div>
  );
}

export default Timer;
