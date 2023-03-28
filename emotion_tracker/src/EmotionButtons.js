import EmotionStats from "./EmotionStats";
import React, { useState, useEffect } from "react";

const buttonData = [
  {
    label: "Happy",
    id: "1",
    icon: "sentiment_satisfied",
    backgroundColor: "#CCF6EF",
    color: "#21BCA0",
  },
  {
    label: "Angry",
    id: "2",
    icon: "sentiment_extremely_dissatisfied",
    backgroundColor: "#F8D8D8",
    color: "#E15555",
  },
  {
    label: "Scared",
    id: "3",
    icon: "mood_bad",
    backgroundColor: "#FFE3CA",
    color: "#FF810D",
  },
  {
    label: "Sad",
    id: "4",
    icon: "sentiment_dissatisfied",
    backgroundColor: "#B8CCF4",
    color: "#5585E1",
  },
  {
    label: "Excited",
    id: "5",
    icon: "sentiment_very_satisfied",
    backgroundColor: "#FFEF99",
    color: "#B09400",
  },
  {
    label: "Neutral",
    id: "6",
    icon: "sentiment_neutral",
    backgroundColor: "#D2ECCE",
    color: "#4B9F3E",
  },
];
function buttonClicked(id) {
  // button clicked

  console.log("button clicked " + id);
  addEmotion(id);
}
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

function EmotionButton() {
  return (
    <div>
      {buttonData.map((button) => (
        <button
          key={button.label}
          style={{
            padding: "8px",
            margin: "8px",
            backgroundColor: button.backgroundColor,
            color: button.color,
            borderStyle: "none",
            borderRadius: "8px",
            width: "90px",
            height: "80px",
          }}
          onClick={() => buttonClicked(button.id)}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="material-symbols-outlined">{button.icon}</span>
            {button.label}
          </div>
        </button>
      ))}
      <EmotionStats />
    </div>
  );
}
export default EmotionButton;
