import EmotionStats from "./EmotionStats";
import React, {useState, useEffect} from "react";
import '../css/EmotionButtons.css';
import {timerStart, timerTick} from "../utils/TimerFunctions";
import EmotionButtons from "./EmotionButtons";
import backendAddress from "../data/apiHooks";


function TabletEmotionButton() {
  const [update, setUpdate] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const [time, setTime] = useState(0);
  const timerTimeMs = 1000;
  const [clicked, setClicked] = useState(0)

  useEffect(() => {
    localStorage.setItem("timer", 0);
    let timer = setInterval(() => {
      timerTick(setTime, timerTimeMs, setButtonActive, setClicked);
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  const addEmotion = async (id) => {

    try {
      const response = await fetch(
        `${backendAddress}emotions/addemotion/tablet`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({emotion: id, subEmotion: 1}),
        }
      );
      if (!response.ok) {
        throw new Error("Error adding emotion");
      }
      setUpdate(!update)
    } catch (error) {
      console.error(`${error} error addEmotion`)
    }
  };

  const buttonClicked = async (id, e) => {
    console.log("button clicked " + id);
    addEmotion(id);
    setClicked(id);
    timerStart(e, setButtonActive);
  }

  return (
    <div className="content">
      <EmotionButtons buttonActive={buttonActive} clicked={clicked} buttonClicked={buttonClicked}></EmotionButtons>
      <div style={{visibility: buttonActive ? "hidden" : "visible"}}>
        <p className="infoText">
        </p>
      </div>
      <EmotionStats
        update={update}
      />
    </div>
  );
}
export default TabletEmotionButton;
// build test

