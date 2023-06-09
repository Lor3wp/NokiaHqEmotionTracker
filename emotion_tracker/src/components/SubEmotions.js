import React, {useState, useEffect} from "react";
import "../css/EmotionButtons.css";
import "../css/SubEmotions.css";
import emotionData from "../data/emotionData";
import SubEmotionButtons from "./SubEmotionButtons";
import {timerStart, timerTick} from "../utils/TimerFunctions";
import backendAddress from "../data/apiHooks";

const SubEmotions = ({showMore, setShowMore}) => {
  const [update, setUpdate] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const [time, setTime] = useState(0);
  const timerTimeMs = 15000;
  const [clicked, setClicked] = useState(0);
  const [subClicked, setSubClicked] = useState("");



  useEffect(() => {
    timerTick(setTime, timerTimeMs, setButtonActive, setClicked); // calling the timerTick once before setting the interval to avoid one second delay
    let timer = setInterval(() => {
      timerTick(setTime, timerTimeMs, setButtonActive, setClicked);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // post emotion to database
  const addEmotion = async (id, subEmotionId) => {
    try {
      const response = await fetch(`${backendAddress}/emotions/addemotion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({emotion: id, subEmotion: subEmotionId}),
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

  const buttonClicked = async (id, subEmotionId, subEmotionLabel, e) => {
    addEmotion(id, subEmotionId);
    setClicked(id);
    setSubClicked(subEmotionLabel);
    timerStart(e, setButtonActive);
    setTimeout(() => {
      setShowMore(!showMore);
    }, 15000);
  };

  return (
    <div className="content">
      <nav>
        <button
          className="exit"
          key="exit-button"
          onClick={() => setShowMore(!showMore)}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </nav>
      <h2 className="title">How are you feeling?</h2>
      <div className="emotion-buttons">
        {emotionData.map((button) => (
          <div key={button.label}>
            <button
              style={{
                backgroundColor: button.rgbColor,
                color: button.textColor,
              }}
              className={
                subClicked !== button.label && !buttonActive
                  ? button.label + "-disabled"
                  : button.label
              }
              disabled={!buttonActive}
              onClick={(e) => buttonClicked(button.id, 1, button.label, e)}
            >
              <div className="EmotionButton-button-label">
                <span className="material-symbols-outlined">{button.icon}</span>
                {button.label}
              </div>
            </button>
            <SubEmotionButtons
              subClicked={subClicked}
              button={button}
              buttonActive={buttonActive}
              buttonClicked={buttonClicked}
            ></SubEmotionButtons>
          </div>
        ))}
      </div>
      <div style={{visibility: buttonActive ? "hidden" : "visible"}}>
        <p className="infoText">
          Share your feelings again in {Math.floor(time / 1000 / 60)} mins,{" "}
          {Math.floor((time / 1000) % 60)} secs
        </p>
      </div>
    </div>
  );
};
export default SubEmotions;
