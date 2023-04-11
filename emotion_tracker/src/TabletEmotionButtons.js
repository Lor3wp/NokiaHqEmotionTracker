import EmotionStats from "./EmotionStats";
import EmotionStatsDay from "./EmotionStats";
import React, { useState, useEffect } from "react";
import './EmotionButtons.css';


const buttonData = [
  {
    label: "Happy",
    id: "1",
    icon: "sentiment_satisfied",
    disabled: false
  },
  {
    label: "Angry",
    id: "2",
    icon: "sentiment_extremely_dissatisfied",
    disabled: false
  },
  {
    label: "Scared",
    id: "3",
    icon: "mood_bad",
    disabled: false
  },

  {
    label: "Excited",
    id: "5",
    icon: "sentiment_very_satisfied",
    disabled: false
  },
  {
    label: "Sad",
    id: "4",
    icon: "sentiment_dissatisfied",
    disabled: false
  },
  {
    label: "Neutral",
    id: "6",
    icon: "sentiment_neutral",
    disabled: false
  },
];




const getButtonClassName = (label) => {
  // Generate a unique class name based on the button's label
  return `${label}`;
};



function TabletEmotionButton({ updateStats, setViewCondition, viewCondition }) {
  const [statsData, setStatsData] = useState();
  const [statsTodayData, setStatsTodayData] = useState();
  const [update, setUpdate] = useState(false);
  const [timerText, setTimerText] = useState("")
  const [buttonActive, setButtonActive] = useState(true);
  const [time, setTime] = useState(0);
  const timerTimeMs = 1000;
  const [startAnimation, setStartAnimation] = useState(false);
  const [clicked, setClicked] = useState(0)

  // TIMER
  const timerStart = (e) => {
    console.log("timerStart ");
    e.preventDefault();
      setButtonActive(false);
      const nyt = Date.now()
      localStorage.setItem('timer', nyt);
  };

  const timerTick = () => {
    // console.log("timerTick ~ ");
    if (localStorage.getItem('timer')){
      let res = Date.now() - localStorage.getItem('timer');
      setTime((timerTimeMs-res) > 0 ? timerTimeMs-res : 0);
      // console.log(res);

      if (res > timerTimeMs){
        setButtonActive(true);
        setClicked(0)
      } else {
        setButtonActive(false);
      }
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      timerTick();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

// END OF TIMER


  const addEmotion = async (id) => {
  
    try {
      const response = await fetch("http://localhost:3001/add/addemotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emotion: id }),
      });
      if (!response.ok) {
        throw new Error("Error adding emotion");
      }
      // handle success response here
      setUpdate(!update)
      // setStatsData()
      // setStatsTodayData("kku")
    } catch (error) {
      // handle error here
    }
  };


  const buttonClicked = async (id, e) => {
    // button clicked
  
    console.log("button clicked " + id);
    addEmotion(id);
    setClicked(id);
    timerStart(e);

      }

  // const [disable, setDisable] = useState(false)
      
  return (
    <div className="content">
      <div className="emotion-buttons">
        {buttonData.map((button) => (
          <button
            style={{animation: startAnimation ? "fadeIn 3s, forwards" : "none"}}
            key={button.label}
            className={clicked !== button.id && !buttonActive ? getButtonClassName(button.label + "-disabled") : getButtonClassName(button.label)}
            id = {clicked === button.id ? getButtonClassName(button.label + "-clicked") : getButtonClassName(button.label)}
            disabled={!buttonActive}
            onClick={(e) => buttonClicked(button.id, e)}
          >
            <div className="EmotionButton-button-label">
              <span className="material-symbols-outlined">{button.icon}</span>
              {button.label}
            </div>
          </button>
        ))}
            </div>
            <div style={{visibility: buttonActive ? "hidden" : "visible"}}>
          <p class="infoText">
          </p>
          </div>
      <EmotionStats
        // statsData={statsData}
        // statsTodayData={statsTodayData}
        update={update}
      />
    </div>
  );
}
export default TabletEmotionButton;
// build test

