import EmotionStats from "./EmotionStats";
import EmotionStatsDay from "./EmotionStats";
import React, { useState, useEffect } from "react";
import './EmotionButtons.css';


const buttonData = [
  {
    label: "Happy",
    id: "1",
    icon: "sentiment_satisfied",
  },
  {
    label: "Angry",
    id: "2",
    icon: "sentiment_extremely_dissatisfied",
  },
  {
    label: "Scared",
    id: "3",
    icon: "mood_bad",
  },

  {
    label: "Excited",
    id: "5",
    icon: "sentiment_very_satisfied",
  },
  {
    label: "Sad",
    id: "4",
    icon: "sentiment_dissatisfied",
  },
  {
    label: "Neutral",
    id: "6",
    icon: "sentiment_neutral",
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


  const buttonClicked = async (id) => {
    // button clicked
  
    console.log("button clicked " + id);
    addEmotion(id);
    // updateStats()
  }



  return (
    <div className="content">
      <div className="emotion-buttons">
        {buttonData.map((button) => (
          <button
            key={button.label}
            className={getButtonClassName(button.label)}
            onClick={() => buttonClicked(button.id)}
          >
            <div className="EmotionButton-button-label">
              <span className="material-symbols-outlined">{button.icon}</span>
              {button.label}
            </div>
          </button>
        ))}
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
// build test

