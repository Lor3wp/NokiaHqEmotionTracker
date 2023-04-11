import "./App.css";
import { useState } from "react";
import EmotionButton from "./EmotionButtons";
import EmotionButtonView from "./EmotionButtonView";
import TestView from "./TestView";
import { ReactDOM } from "react";
import React from "react";
import TabletEmotionButton from "./TabletEmotionButtons";
import TabletView from "./TabletView";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import EmotionStats from "./EmotionStats";
import { useGeolocated } from "react-geolocated";
import DisabledLocationView from "./DisabledLocationView";
import "material-symbols"
import Loading from "./Loading";
import TooFarAway from "./TooFarAwayView";


// Haversine formula
// takes latitude and longitude and calculates the distance from that point to Nokia HQ
function calculateDistance(lat, lon) {
  const radiusOfEarth = 6371; // Radius of the earth in km
  const nokiaLat = 60.221793
  const nokiaLon = 24.755882
  // convert degrees to radius
  const dLat = deg2rad(lat - nokiaLat);
  const dLon = deg2rad(lon - nokiaLon);
  
  // the square of the half of the great circle distance between the two points
  const haversineCentralAngle =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat)) * Math.cos(deg2rad(nokiaLat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  // the great circle distance between the two points in radians
  const distanceInRadians = 2 * Math.atan2(Math.sqrt(haversineCentralAngle), Math.sqrt(1 - haversineCentralAngle));
  const distance = radiusOfEarth * distanceInRadians; // Distance in km
  console.log(`you're ${distance}km away from nokia`)
  return distance;
}
// degrees to radius
function deg2rad(deg) {
  return deg * (Math.PI/180)
}


const App = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
                watchPosition: true
            },
            userDecisionTimeout: 5000,
        });
        // if geolocation is not available show not supported text
    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
        // if location access is denied show Disabled location view
    ) : !isGeolocationEnabled ? (
        <DisabledLocationView />
        // if geolocation is available and enabled and we have coordinates, show main screen
    ) : coords && calculateDistance(coords.latitude, coords.longitude) <= 1.5 ? (
      <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/NokiaHqEmotionTracker" Component={EmotionButtonView} />
            <Route exact path="/TabletView" Component={TabletView} />
          </Routes>
        </Router>
      </header>
    </div>
    // if you are more than 1.5km away from Nokia
    ) : coords && calculateDistance(coords.latitude, coords.longitude) > 1.5 ? (
      <TooFarAway km = {calculateDistance(coords.latitude, coords.longitude).toFixed(2)}></TooFarAway>
    )
        // if we are waiting for user to give the permission and when loading the page
     : (
    <Loading />
    );
};

export default App;
// testattu