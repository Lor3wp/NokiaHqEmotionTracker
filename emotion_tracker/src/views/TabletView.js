import React from "react";
import TabletEmotionButton from "../components/TabletEmotionButtons";
import "../css/EmotionButtonView.css";
import { useEffect, useState } from "react";


const TabletView = ({ setStatsData }) => {
  const [isPassword, setIsPassword] = useState("false");
  const [password, setPassword] = useState('');
  const [update, setUpdate] = useState(false);
  const correctPassword = "kissakoira";


  const handleClick = () => {
    setUpdate(!update)
  }

  useEffect(() => {
      localStorage.setItem('password', isPassword)
      if(password === correctPassword) {
        setIsPassword("true");
      } else {
        setIsPassword("false");
      }
    },[isPassword, password]);

    return (
      <div className="emotionButtonView">
        <div
          className="titleAndOthers"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 label="Title">How are you feeling?</h1>
        </div>
        <div className="emotions">
          <TabletEmotionButton updateStats={() => setStatsData(null)} />
        </div>
      </div>
    );

}
export default TabletView;
