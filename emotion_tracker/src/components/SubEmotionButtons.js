import React from "react";
import "../css/EmotionButtons.css";
import "../css/SubEmotions.css";
import { doDecor } from "./Decor";

const SubEmotionButtons = ({
  subClicked,
  button,
  buttonActive,
  buttonClicked,
}) => {
  return (
    <div
      className={`SubEmotionButton-container ${
        subClicked === button.label ? "transparent" : ""
      }`}
    >
      {button.subEmotions.map((subEmotion) => (
        <button
          style={{
            backgroundColor: button.rgbColor,
            color: button.textColor,
          }}
          className={
            subClicked !== subEmotion.label && !buttonActive
              ? subEmotion.label + "-disabled"
              : subEmotion.label
          }
          key={subEmotion.label}
          disabled={!buttonActive}
          onClick={(e) => {
            buttonClicked(button.id, subEmotion.id, subEmotion.label, e);
            doDecor(button.rgbColor);
          }}
        >
          {subEmotion.label}
        </button>
      ))}
    </div>
  );
};
export default SubEmotionButtons;
