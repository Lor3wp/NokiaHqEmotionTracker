
const timerStart = (e, setButtonActive) => {
  console.log("timerStart ");
  e.preventDefault();
  setButtonActive(false);
  const now = Date.now();
  localStorage.setItem("timer", now);
};

  const timerTick = (setTime, timerTimeMs, setButtonActive, setClicked) => {
    // console.log("timerTick ~ ");
    if (localStorage.getItem('timer')){
      let res = Date.now() - localStorage.getItem('timer');
      setTime((timerTimeMs-res) > 0 ? timerTimeMs-res : 0);
      // console.log(res);

      if (res > timerTimeMs) {
        setButtonActive(true);
        setClicked(0);
      } else {
        setButtonActive(false);
      }
    }
  };
export {timerStart, timerTick};

// tested