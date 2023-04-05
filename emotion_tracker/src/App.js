import "./App.css";
import { useState } from "react";
import EmotionButton from "./EmotionButtons";
import EmotionButtonView from "./EmotionButtonView";
import TestView from "./TestView";
import TabletEmotionButton from "./TabletEmotionButtons";
import TabletView from "./TabletView";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import EmotionStats from "./EmotionStats";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/NokiaHqEmotionTracker" Component={EmotionButtonView} />
            <Route exact path="/TabletView" Component={TabletView} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
// testattu