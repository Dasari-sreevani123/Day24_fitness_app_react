import React from "react";

function WaterTracker({ user, onWaterChange }) {
  const handleDrinkWater = () => {
    onWaterChange(1); // Drink 1 glass
  };

  return (
    <div>
      <h3>Water Intake Tracker</h3>
      <p>User: {user.name}</p>
      <button onClick={handleDrinkWater}>Drink 1 Glass</button>
    </div>
  );
}

export default WaterTracker;
