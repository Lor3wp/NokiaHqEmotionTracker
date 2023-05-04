import React, { useState, useEffect } from "react";
//import backendAddress from "../data/apiHooks";
const backendAddress = "http://localhost:3001/";

const EmotionStats = ({ update }) => {
  const [data, setData] = useState(null);
  const [dayData, setDayData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dayLoading, setDayLoading] = useState(true);

  // fetching todays emotions and all time emotinos from database
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${backendAddress}emotions/getallemotions`);
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    }
    fetchData();
  }, [update]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${backendAddress}emotions/gettodayemotions`
      );
      const jsonData = await response.json();
      setDayData(jsonData);
      setDayLoading(false);
    }
    fetchData();
  }, [update]);

  // show loading while fetching
  if (dayLoading || loading) {
    return <div>Loading...</div>;
  }
  // set text for user
  return (
    <div>
      <div className="infoText">
        Feelings were shared {dayData[0].count} times today and {data[0].count}{" "}
        times in total.
      </div>
    </div>
  );
};

export default EmotionStats;
