import React from "react";

function CaloriesTracker({ user, onCaloriesChange }) {
  const handleBurnCalories = () => {
    onCaloriesChange(100); // Burn 100 calories
  };

  return (
    <div>
      <h3>Calories Tracker</h3>
      <p>User: {user.name}</p>
      <button onClick={handleBurnCalories}>Burn 100 Calories</button>
    </div>
  );
}

export default CaloriesTracker;
