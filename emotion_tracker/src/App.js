import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import EmotionButton from "./EmotionButtons";
import EmotionButtonView from "./EmotionButtonView";
import TestView from "./TestView";

import EmotionStats from "./EmotionStats";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <header className="App-header">
        <EmotionButtonView />

        <h1>How are you today?</h1>
        <div
          className="emotions"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <EmotionButton />
        </div>
      </header>
    </div>
  );
}

export default App;
