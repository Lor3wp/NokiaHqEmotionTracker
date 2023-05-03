import EmotionStats from "./EmotionStats";
import React, {useState, useEffect} from "react";
import '../css/EmotionButtons.css';
import EmotionButtons from "./EmotionButtons";
import {timerStart, timerTick} from "../utils/TimerFunctions";
import backendAddress from "../data/apiHooks";

const Emotions = () => {
  const [update, setUpdate] = useState(false);
  const [buttonActive, setButtonActive] = useState(null);
  const [time, setTime] = useState(0);
  const timerTimeMs = 0;
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
        body: JSON.stringify({emotion: id, subEmotion: 1}),
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

<<<<<<< HEAD
  const buttonClicked = async (id, e) => {
=======
  const buttonClicked = async (id, e, label) => {
>>>>>>> 83007bb3880878506c2e2866799c3c8737192dd1
    addEmotion(id);
    setClicked(id);
    timerStart(e, setButtonActive);
    setSelectedButton(label);
  };

  return (
    <div className="content">
<<<<<<< HEAD
      <EmotionButtons
        buttonActive={buttonActive}
        clicked={clicked}
        buttonClicked={buttonClicked}
      ></EmotionButtons>
      <div style={{ visibility: buttonActive ? "hidden" : "visible" }}>
=======
      <EmotionButtons buttonActive={buttonActive} clicked={clicked} buttonClicked={buttonClicked} selectedButton={selectedButton} setSelectedButton={setSelectedButton}></EmotionButtons>
      <div style={{visibility: buttonActive ? "hidden" : "visible"}}>
>>>>>>> 83007bb3880878506c2e2866799c3c8737192dd1
        <p className="infoText">
          Share your feelings again in {Math.floor(time / 1000 / 60)} mins,{" "}
          {Math.floor((time / 1000) % 60)} secs
        </p>
      </div>
      <EmotionStats update={update} />
    </div>
  );
<<<<<<< HEAD
};
=======

}
>>>>>>> 83007bb3880878506c2e2866799c3c8737192dd1
export default Emotions;
// build test

