import EmotionButton from "../components/EmotionButtons";
import "../css/EmotionButtonView.css";
import TestView from "../TestView";
import StatWindow from "./StatWindow";
import { useState } from "react";
import Timer from "../components/Timer";
import ShowMoreButton from "../components/ShowMoreButton";
import SubEmotionButtons from "../components/SubEmotionButtons";

const clickHandler = (viewCondition, setViewCondition) => {
  setViewCondition(!viewCondition);
  console.log("clicked how others feel");
};

const EmotionButtonView = ({ setStatsData }) => {
  const [viewCondition, setViewCondition] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const backButtonClicked = () => {
    setViewCondition(!viewCondition);
  };
  if(showMore) {
    return(
      <SubEmotionButtons showMore={showMore} setShowMore={setShowMore}></SubEmotionButtons>
    );
  }
  else if (!viewCondition) {
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
            showMore={showMore}
            setShowMore={setShowMore}
          />
        </div>
        <ShowMoreButton showMore={showMore} setShowMore={setShowMore}></ShowMoreButton>
      </div>
    );
  } else if (viewCondition) {
    return <StatWindow backButtonClicked={backButtonClicked}></StatWindow>;
  }

}
export default EmotionButtonView;
