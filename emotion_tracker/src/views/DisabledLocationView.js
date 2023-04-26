import React, {useEffect, useState} from "react";
import '../css/DisabledLocationView.css'
import '../css/EmotionButtons.css'
import Loading from "./Loading";
const DisabledLocationView = () => {


return (
    <div class="App-header">
        <h1>You need to give a permission to use your location</h1>
        <p>To use this application, we require access to your location as it only works within a 1.5km radius from Nokia HQ.</p>
    </div>
);
}
export default DisabledLocationView;
