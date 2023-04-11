import React from "react";
import './DisabledLocationView.css'
import './EmotionButtons.css'
function DisabledLocationView(){

return (
    <header className="App-header">
    <div class="page-content">
        <h1>Location access denied</h1>
        <p>To use this application, we require access to your location as it only works within a 1.5km radius from Nokia HQ.</p>
    </div>
    </header>
);
}
export default DisabledLocationView;