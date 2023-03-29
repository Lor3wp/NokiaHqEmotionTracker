import React, { useState, useEffect } from "react";

const getStatsById = async (id) => {
  try {
    const response = await fetch(`http://localhost/get/getstatsbyid/${id}`);
    if (!response.ok) {
      throw new Error("Error retrieving stats");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // handle error here
  }
};

function EmotionStats() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3001/getall/getallemotions`
      );
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{data.count}</div>;
}

export default EmotionStats;
