import EmotionStats from "./EmotionStats";
import React, { useState, useEffect } from "react";
import '../css/EmotionButtons.css';
import {timerStart, timerTick} from "../utils/TimerFunctions";
import EmotionButtons from "./EmotionButtons";


function TabletEmotionButton() {
  const [update, setUpdate] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const [time, setTime] = useState(0);
  const timerTimeMs = 1000;
  const [clicked, setClicked] = useState(0)

  useEffect(() => {
    let timer = setInterval(() => {
      timerTick(setTime, timerTimeMs, setButtonActive, setClicked);
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  const addEmotion = async (id) => {

    try {
      const response = await fetch("http://localhost:3001/add/addemotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emotion: id, subEmotion: 1 }),
      });
      if (!response.ok) {
        throw new Error("Error adding emotion");
      }
      // handle success response here
      setUpdate(!update)
    } catch (error) {
      console.log(`${error} error addEmotion`)
      // handle error here
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

