import React from "react";

function StepsTracker({ user, onStepsChange }) {
  const handleAddSteps = () => {
    onStepsChange(500); // Add 500 steps
  };

  return (
    <div>
      <h3>Steps Tracker</h3>
      <p>User: {user.name}</p>
      <button onClick={handleAddSteps}>Add 500 Steps</button>
    </div>
  );
}

export default StepsTracker;
