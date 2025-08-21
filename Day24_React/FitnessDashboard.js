import React, { useState } from "react";
import StepsTracker from "./StepsTracker";
import CaloriesTracker from "./CaloriesTracker";
import WaterTracker from "./WaterTracker";

function FitnessDashboard() {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [water, setWater] = useState(0);

  const user = { name: "Sreevani", age: 24, weight: 55 };

  const handleStepsChange = (newSteps) => setSteps(steps + newSteps);
  const handleCaloriesChange = (newCalories) => setCalories(calories + newCalories);
  const handleWaterChange = (newWater) => setWater(water + newWater);

  return (
    <div>
      <h2>Fitness Tracker Dashboard</h2>
      <StepsTracker user={user} onStepsChange={handleStepsChange} />
      <CaloriesTracker user={user} onCaloriesChange={handleCaloriesChange} />
      <WaterTracker user={user} onWaterChange={handleWaterChange} />

      <hr />
      <h3>Summary</h3>
      <p>Total Steps: {steps}</p>
      <p>Total Calories Burned: {calories}</p>
      <p>Total Water Intake (glasses): {water}</p>
    </div>
  );
}

export default FitnessDashboard;
