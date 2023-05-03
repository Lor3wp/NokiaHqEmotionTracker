import "./css/App.css";
import { useEffect, useState } from "react";
import EmotionButtonView from "./views/EmotionButtonView";
import React from "react";
import { useGeolocated } from "react-geolocated";
import DisabledLocationView from "./views/DisabledLocationView";
import "material-symbols";
import Loading from "./views/Loading";
import TooFarAway from "./views/TooFarAwayView";
import TabletView from "./views/TabletView";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import calculateDistance from "./utils/CalculateDistance";

const App = () => {
  const [showDisabledView, setShowDisabledView] = useState(false);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
        watchPosition: true,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (!isGeolocationEnabled) {
      const timeoutId = setTimeout(() => {
        setShowDisabledView(true);
      }, 5000); // set the timeout to 5 seconds
      return () => clearTimeout(timeoutId);
    }
  }, [isGeolocationEnabled]);

  // if geolocation is not available show not supported text
  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : // if location access is denied show Disabled location view
  showDisabledView ? (
    <DisabledLocationView />
  ) : // if geolocation is available and enabled and we have coordinates, show main screen
  coords && calculateDistance(coords.latitude, coords.longitude) <= 15 ? (
    <div className="App">
      <header className="App-header">
        <Router basename="/">
          <Routes>
            <Route exact path="/" element={<EmotionButtonView />} />
            <Route
              exact
              path="/1f1244Gopd5004JKiu03Vili"
              element={<TabletView />}
            />
          </Routes>
        </Router>
      </header>
    </div>
  ) : // if you are more than 1.5km away from Nokia
  coords && calculateDistance(coords.latitude, coords.longitude) > 15 ? (
    <TooFarAway
      km={calculateDistance(coords.latitude, coords.longitude).toFixed(2)}
    ></TooFarAway>
  ) : (
    // if we are waiting for user to give the permission and when loading the page
    <div className="App-header">
      <Loading />
    </div>
  );
};

export default App;
