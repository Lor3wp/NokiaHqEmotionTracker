import EmotionStats from "./EmotionStats";
import EmotionStatsDay from "./EmotionStats";
import React, { useState, useEffect } from "react";
import '../css/EmotionButtons.css';
import emotionData from "../data/emotionData";
import Loading from "../views/Loading";
import EmotionButtons from "./EmotionButtons";


const EmotionButton = ({ showMore, setShowMore }) => {
  const [statsData, setStatsData] = useState();
  const [statsTodayData, setStatsTodayData] = useState();
  const [update, setUpdate] = useState(false);
  const [buttonActive, setButtonActive] = useState(null);
  const [time, setTime] = useState(0);
  const timerTimeMs = 15000;
  const [clicked, setClicked] = useState(0);

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

  useEffect(() => {
    timerTick(); // calling the timerTick once before setting the interval to avoid one second delay
    let timer = setInterval(() => {
      timerTick();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // END OF TIMER

  // post emotion to database
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
      setUpdate(!update);
    } catch (error) {
      // handle error here
      console.error(error);
    }
  };

  const buttonClicked = async (id, e) => {
    addEmotion(id);
    setClicked(id);
    timerStart(e);
  };

    return (
    <div className="content">
    <EmotionButtons buttonActive={buttonActive} clicked={clicked} buttonClicked={buttonClicked}></EmotionButtons>
      <div style={{ visibility: buttonActive ? "hidden" : "visible" }}>
        <p className="infoText">
          Share your feelings again in {Math.floor(time / 1000 / 60)} mins,{" "}
          {Math.floor((time / 1000) % 60)} secs
        </p>
      </div>
      <EmotionStats
        update={update}
      />
    </div>
    );
  
}
export default EmotionButton;
// build test

