import React, { useState, useEffect } from "react";
import "../css/EmotionButtons.css";
import "../css/SubEmotions.css";
import emotionData from "../data/emotionData";
import EmotionButtons from "./EmotionButtons";
import SubEmotionButtons from "./SubEmotionButtons";

const SubEmotions = ({ showMore, setShowMore }) => {
  const [update, setUpdate] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const [time, setTime] = useState(0);
  const timerTimeMs = 15000;
  const [startAnimation, setStartAnimation] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [subClicked, setSubClicked] = useState("");

  // TIMER
  const timerStart = (e) => {
    console.log("timerStart ");
    e.preventDefault();
    setButtonActive(false);
    const now = Date.now();
    localStorage.setItem("timer", now);
  };

  const timerTick = () => {
    // console.log("timerTick ~ ");
    if (localStorage.getItem("timer")) {
      let res = Date.now() - localStorage.getItem("timer");
      setTime(timerTimeMs - res > 0 ? timerTimeMs - res : 0);
      // console.log(res);

      if (res > timerTimeMs) {
        setButtonActive(true);
        setClicked(0);
      } else {
        setButtonActive(false);
      }
    }
  };
  const subEmotionClicked = (subEmotion) => {
    console.log(`sub emotion clicked ${subEmotion}`);
  };

  useEffect(() => {
    timerTick();
    let timer = setInterval(() => {
      timerTick();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // END OF TIMER

  // post emotion to database
  const addEmotion = async (id, subEmotionId) => {
    try {
      const response = await fetch("http://localhost:3001/add/addemotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emotion: id, subEmotion: subEmotionId }),
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
    timerStart(e);
    console.log(`sub id ${subEmotionLabel}`);
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
              className={
                subClicked !== button.label && !buttonActive
                  ? button.label + "-disabled"
                  : button.label
              }
              id={
                subClicked === button.label
                  ? button.label + "-clicked"
                  : button.label
              }
              disabled={!buttonActive}
              onClick={(e) => buttonClicked(button.id, e)}
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
      <div style={{ visibility: buttonActive ? "hidden" : "visible" }}>
        <p className="infoText">
          Share your feelings again in {Math.floor(time / 1000 / 60)} mins,{" "}
          {Math.floor((time / 1000) % 60)} secs
        </p>
      </div>
    </div>
  );
};
export default SubEmotions;
