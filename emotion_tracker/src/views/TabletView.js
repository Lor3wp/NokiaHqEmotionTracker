import TabletEmotionButton from "../components/TabletEmotionButtons";
import "../EmotionButtonView.css";
import { useState } from "react";


const TabletView = ({ setStatsData }) => {
  const [password, setPassword] = useState('')
  const [update, setUpdate] = useState(false);

  const handleClick = () => {
    localStorage.setItem('passu', password)
    setUpdate(!update)
  }

  if(localStorage.getItem("passu") === "Kissakoira"){
    return (
      <div className="emotionButtonView">
        <div
          className="titleAndOthers"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1>How are you feeling?</h1>
        </div>
        <div className="emotions">
        <TabletEmotionButton
        updateStats={() => setStatsData(null)}
         />
        </div>
      </div>
    );
} else {
    return (
    <div id="passwordScreen">
        <input
            className="howOthersFeltButton"
            id="passwordInput"
            type="password"
            value={password}
            onInput={e => setPassword(e.target.value)}
            placeholder="Password"
            label="Gimme Password"
        />
        <button className="howOthersFeltButton" onClick={() =>  handleClick()}>

            Submit
        </button>
    </div>
    )
}
  }
export default TabletView;
