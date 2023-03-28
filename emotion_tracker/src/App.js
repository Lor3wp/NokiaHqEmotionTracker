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


      </header>
    </div>
  );
}

export default App;
