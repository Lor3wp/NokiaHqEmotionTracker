import React, { useState, useEffect } from "react";
import '../css/EmotionButtons.css';
import emotionData from "../data/emotionData";


const EmotionButtons = ({ buttonActive, clicked, buttonClicked }) => {
    return(
<div className="emotion-buttons">
{emotionData.map((button) => (
  <button
    style={{
      animation: buttonActive ? "fadeIn 3s, forwards" : "none"
    }}
    key={button.label}
    className={
      clicked !== button.id && !buttonActive
        ? button.label + "-disabled"
        : button.label
    }
    id={
      clicked === button.id
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
))}
</div>
    );
}
export default EmotionButtons;