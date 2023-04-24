
// Haversine formula
// takes latitude and longitude and calculates the distance from that point to Nokia HQ
const calculateDistance = (lat, lon) => {
    const radiusOfEarth = 6371; // Radius of the earth in km
    const nokiaLat = 60.221793;
    const nokiaLon = 24.755882;
    // convert degrees to radius
    const dLat = deg2rad(lat - nokiaLat);
    const dLon = deg2rad(lon - nokiaLon);
  
    // the square of the half of the great circle distance between the two points
    const haversineCentralAngle =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat)) *
        Math.cos(deg2rad(nokiaLat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
  
    // the great circle distance between the two points in radians
    const distanceInRadians =
      2 *
      Math.atan2(
        Math.sqrt(haversineCentralAngle),
        Math.sqrt(1 - haversineCentralAngle)
      );
    const distance = radiusOfEarth * distanceInRadians; // Distance in km
    console.log(
      `you're ${distance}km away from nokia. Latitude: ${lat} Longitude: ${lon}`
    );
    return distance;
  };
  // degrees to radius
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  export default calculateDistance;