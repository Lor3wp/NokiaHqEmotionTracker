import EmotionButton from "./EmotionButtons";
import "./EmotionButtonView.css";
import TestView from "./TestView";
import { useState } from "react";

function clickHandler(viewCondition, setViewCondition) {
  setViewCondition(!viewCondition);
  console.log("clicked how others feel");
}

function EmotionButtonView() {
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
          <h1>How are you today?</h1>
          <button
            className="howOthersFeltButton"
            onClick={() => clickHandler(viewCondition, setViewCondition)}
          >
            See how other people felt today
          </button>
        </div>
        <div className="emotions">
          <EmotionButton />
        </div>
      </div>
    );
  } else {
    return <TestView backButtonClicked={backButtonClicked}></TestView>;
  }
}
export default EmotionButtonView;
