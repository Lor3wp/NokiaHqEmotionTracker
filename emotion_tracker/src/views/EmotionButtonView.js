import Emotions from "../components/Emotions";
import "../css/EmotionButtonView.css";
import StatWindow from "./StatWindow";
import {useState} from "react";
import ShowMoreButton from "../components/ShowMoreButton";
import SubEmotions from "../components/SubEmotions"

const clickHandler = (viewCondition, setViewCondition) => {
  setViewCondition(!viewCondition);
};

const EmotionButtonView = ({setStatsData}) => {
  const [viewCondition, setViewCondition] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const backButtonClicked = () => {
    setViewCondition(!viewCondition);
  };
  if (showMore) {
    return (
      <SubEmotions showMore={showMore} setShowMore={setShowMore}></SubEmotions>
    );
  }
  else if (!viewCondition) {
    return (
      <div className="emotionButtonView">
        <div
          className="titleAndOthers"
          style={{display: "flex", flexDirection: "column"}}
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
          <Emotions
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
