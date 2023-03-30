import EmotionStats from "./EmotionStats";
import EmotionStatsDay from "./EmotionStats";
import React, { useState, useEffect } from "react";
import './EmotionButtons.css';



const buttonData = [
  {
    label: "Happy",
    id: "1",
    icon: "sentiment_satisfied",
    // backgroundColor: "rgb(206 255 195)",
    // color: "rgb(61 148 42)"
  },
  {
    label: "Angry",
    id: "2",
    icon: "sentiment_extremely_dissatisfied",
    // backgroundColor: "rgb(255 190 190)",
    // color: "rgb(225, 85, 85)",
  },
  {
    label: "Scared",
    id: "3",
    icon: "mood_bad",
    // backgroundColor: "rgb(243, 189, 255)",
    // color: "rgb(127 62 159)",
  },

  {
    label: "Excited",
    id: "5",
    icon: "sentiment_very_satisfied",
    // backgroundColor: "rgb(255, 239, 153)",
    // color: "rgb(176, 148, 0)",
  },
  {
    label: "Sad",
    id: "4",
    icon: "sentiment_dissatisfied",
    // backgroundColor: "rgb(184, 204, 244)",
    // color: "rgb(63 103 179)",
  },
  {
    label: "Neutral",
    id: "6",
    icon: "sentiment_neutral",
    // backgroundColor: "rgb(255, 227, 202)",
    // color: "rgb(255, 129, 13)",
  },
];




const getButtonClassName = (label) => {
  // Generate a unique class name based on the button's label
  return `${label}`;
};

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
    
  } catch (error) {
    // handle error here
  }
};

function EmotionButton({ updateStats }) {

  const buttonClicked = async (id) => {
    // button clicked
  
    console.log("button clicked " + id);
    addEmotion(id);
    updateStats()
  }

  const [statsData, setStatsData] = useState();
  const [statsTodayData, setStatsTodayData] = useState();

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
        statsData={statsData}
        setStatsData={setStatsData}
        statsTodayData={statsTodayData}
        setStatsTodayData={setStatsTodayData}
      />
    </div>
  );
}
export default EmotionButton;
