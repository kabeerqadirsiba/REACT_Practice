import React, { useState, useEffect } from "react";

export const TrafficLight = () => {
  const [light, setLight] = useState("red");

  const colors = ["red", "yellow", "green"];

  useEffect(() => {
    const interval = setInterval(() =>
      setLight((prev) =>
        prev === colors[colors.length - 1]
          ? colors[0]
          : colors[colors.indexOf(prev) + 1]
      ), 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div className={"red-light " + (light === "red" ? "light-on" : "light-off")}></div>

        <div className={"yellow-light " + (light === "yellow" ? "light-on" : "light-off")}></div>

        <div className={"green-light " + (light === "green" ? "light-on" : "light-off")}></div>
      </div>
    </div>
  );
};

export default TrafficLight;
