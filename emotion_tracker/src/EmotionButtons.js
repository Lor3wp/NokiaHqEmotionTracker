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



function EmotionButton({ updateStats }) {
  const [statsData, setStatsData] = useState();
  const [statsTodayData, setStatsTodayData] = useState();
  const [update, setUpdate] = useState(false);
  const [buttonActive, setBA] = useState(true);
  const [aika, setAika] = useState(0);
  const timerTimeMs = 3600000;
  const [timerText, setTimerText] = useState("")

//   // TIMER
//   const timerStart = (e) => {
//     console.log("timerStart ");
//     e.preventDefault();
//       setBA(false);
//       const nyt = Date.now()
//       localStorage.setItem('timer', nyt);
//   };
//   const timerTick = () => {
//     console.log("timerTick ~ ");
//     if (localStorage.getItem('timer')){
//       let res = Date.now() - localStorage.getItem('timer');
//       setAika((timerTimeMs-res) > 0 ? timerTimeMs-res : 0);
//       console.log(res);
//       if (res > timerTimeMs){
//         setBA(true);
//       } else {
//         setBA(false);
//       }
//     }
//   };

//   useEffect(() => {
//     let timer = setInterval(() => {
//       timerTick();
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

// // END OF TIMER


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


  const buttonClicked = async (id, label) => {
    // button clicked
  
    console.log("button clicked " + id);
    addEmotion(id);
    // make condition which switches disable value to true after one hour
    setDisable(!disable)
    setClicked(id)
//     setTimerText(<p>
// {Math.floor(aika/1000/60)} mins, {Math.floor((aika/1000)%60)} secs
//     </p>)
      }

  const [disable, setDisable] = useState(false)
  const [clicked, setClicked] = useState(0)

  return (
    <div className="content">
      <div className="emotion-buttons">
        {buttonData.map((button) => (
          <button
            key={button.label}
            className={clicked !== button.id && disable ? getButtonClassName(button.label + "-disabled") : getButtonClassName(button.label)}
            id = {clicked === button.id ? getButtonClassName(button.label + "-clicked") : getButtonClassName(button.label)}
            disabled={disable}
            onClick={() => buttonClicked(button.id)}
          >
            <div className="EmotionButton-button-label">
              <span className="material-symbols-outlined">{button.icon}</span>
              {button.label}
            </div>
          </button>
        ))}
        {/* <div>{timerText}</div> */}
      </div>
      <EmotionStats
        // statsData={statsData}
        // statsTodayData={statsTodayData}
        update={update}
      />
    </div>
  );
}
export default EmotionButton;
