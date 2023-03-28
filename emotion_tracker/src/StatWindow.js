import './App.css';
import React from 'react';
import Piechart from './Piechart';
import Barchart from './Barchart'
import { useState } from "react";
// import {viewCondition, setViewCondition} from "./EmotionButtonView";

function StatWindow({backButtonClicked}) {
  return (
    <div className="StatWindow">
      <header className="App-header">
      <button style={{ borderStyle: "none", backgroundColor: "transparent", alignSelf: "start"}}
      onClick = {backButtonClicked}
      >
        <span class="material-symbols-outlined" style={{ color: "white" }}> 
          arrow_back
        </span>
      </button>
        <div>
          <Piechart />
        </div>
        <div style={{paddingTop:'100px'}}>
          <Barchart />
        </div>
      </header>
    </div>
  );
}

export default StatWindow;
