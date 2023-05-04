import EmotionStats from "./EmotionStats";
import React, { useState, useEffect } from "react";
import "../css/EmotionButtons.css";
import EmotionButtons from "./EmotionButtons";
import { timerStart, timerTick } from "../utils/TimerFunctions";
//import backendAddress from "../data/apiHooks";
const backendAddress = "http://localhost:3001/";

const Emotions = () => {
  const [update, setUpdate] = useState(false);
  const [buttonActive, setButtonActive] = useState(null);
  const [time, setTime] = useState(0);
  const timerTimeMs = 2000;
  const [clicked, setClicked] = useState(0);
  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    if (localStorage.getItem("timer") == null) {
      localStorage.setItem("timer", 0);
    }
    timerTick(setTime, timerTimeMs, setButtonActive, setClicked); // calling the timerTick once before setting the interval to avoid one second delay
    let timer = setInterval(() => {
      timerTick(setTime, timerTimeMs, setButtonActive, setClicked);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // post emotion to database
  const addEmotion = async (id) => {
    try {
      const response = await fetch(backendAddress + "emotions/addemotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emotion: id, subEmotion: 1 }),
      });
      if (!response.ok) {
        throw new Error("Error adding emotion");
      }
      setUpdate(!update);
    } catch (error) {
      // handle error here
      console.error(error);
    }
  };

  const buttonClicked = async (id, e) => {
    addEmotion(id);
    setClicked(id);
    timerStart(e, setButtonActive);
    //setSelectedButton(label);
  };

  return (
    <div className="content">
      <EmotionButtons
        buttonActive={buttonActive}
        clicked={clicked}
        buttonClicked={buttonClicked}
      ></EmotionButtons>
      <div style={{ visibility: buttonActive ? "hidden" : "visible" }}>
        <p className="infoText">
          Share your feelings again in {Math.floor(time / 1000 / 60)} mins,{" "}
          {Math.floor((time / 1000) % 60)} secs
        </p>
      </div>
      <EmotionStats update={update} />
    </div>
  );
};
export default Emotions;
