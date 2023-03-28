import { useState } from "react";
// import {viewCondition, setViewCondition} from "./EmotionButtonView";


function TestView({backButtonClicked}) {
  return (
    <div style = {{display: "flex", flexDirection: "column", alignContent: "end"}}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <button style={{ borderStyle: "none", backgroundColor: "transparent", alignSelf: "start"}}
      onClick = {backButtonClicked}
      >
        <span class="material-symbols-outlined" style={{ color: "white" }}> 
          arrow_back
        </span>
      </button>
      <h1>Graph view</h1>
    </div>
  );
}
export default TestView;
