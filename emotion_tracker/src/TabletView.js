import TabletEmotionButton from "./TabletEmotionButtons";
import "./EmotionButtonView.css";
import { useState } from "react";


function TabletView({ setStatsData }) {
  const [password, setPassword] = useState('')

  if(password === "Kissakoira"){
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
    <div>
        <input
            type="password"
            value={password}
            onInput={e => setPassword(e.target.value)}
            placeholder="Password"
            label="Gimme Password"
        />
    </div>
    )
}
  }
export default TabletView;
