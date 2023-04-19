import EmotionButton from "../components/EmotionButtons";
import "../css/EmotionButtonView.css";
import TestView from "../TestView";
import StatWindow from "./StatWindow";
import { useState } from "react";
import Timer from "../components/Timer";

const clickHandler = (viewCondition, setViewCondition) => {
  setViewCondition(!viewCondition);
  console.log("clicked how others feel");
};

const EmotionButtonView = ({ setStatsData }) => {
  const [viewCondition, setViewCondition] = useState(false);

  const backButtonClicked = () => {
    setViewCondition(!viewCondition);
  };

  if (!viewCondition) {
    return (
      <div className="emotionButtonView">
        <div
          className="titleAndOthers"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1>How are you feeling?</h1>
          <button
            className="howOthersFeltButton"
            onClick={() => clickHandler(viewCondition, setViewCondition)}
          >
            See how other people felt today
          </button>
        </div>
        <div className="emotions">
          <EmotionButton
            updateStats={() => setStatsData(null)}
            setViewCondition={setViewCondition}
            viewCondition={viewCondition}
          />
        </div>
      </div>
    );
  } else {
    return <StatWindow backButtonClicked={backButtonClicked}></StatWindow>;
  }
}
export default EmotionButtonView;
