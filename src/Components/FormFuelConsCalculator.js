import Button from "./Button";
import { useState } from "react";

export default function FormFuelConsCalculator({
  setSelectedCar,
  selectedCar,
  cars,
  setCars,
  handleCalculation,
}) {
  const [distanceTravelled, setDistanceTravelled] = useState(0);
  const [fuelSpent, setFuelSpent] = useState(0);
  const [fuelPrice, setFuelPrice] = useState(0);
  const avgFuelSpentPer100km = (fuelSpent / (distanceTravelled / 100)).toFixed(
    1
  );
  function handleCalculation(e) {
    e.preventDefault();
    const newArr = cars.map((car) =>
      selectedCar.id === car.id
        ? {
            ...car,
            fuelConsumption: avgFuelSpentPer100km,
          }
        : car
    );
    setCars(newArr);
    setSelectedCar(null);
  }
  const tripPrice = fuelSpent * fuelPrice;
  return (
    <form
      className="form-fuel-consumption"
      onSubmit={(e) => handleCalculation(e)}
    >
      <label>
        {selectedCar.make + " " + selectedCar.model} Distance travelled in km:
      </label>
      <input
        onChange={(e) => setDistanceTravelled(e.target.value)}
        type="number"
        value={distanceTravelled}
      />
      <label>Fuel spent:</label>
      <input
        onChange={(e) => setFuelSpent(e.target.value)}
        type="number"
        value={fuelSpent}
      />
      <label>Fuel price:</label>
      <input
        onChange={(e) => setFuelPrice(e.target.value)}
        type="number"
        value={fuelPrice}
      />
      <label>Average fuel spent per 100km:</label>
      <input
        type="text"
        value={isNaN(avgFuelSpentPer100km) ? 0 : avgFuelSpentPer100km}
        disabled
      />
      <label>Trip Price:</label>
      <input type="text" value={tripPrice} disabled />
      <Button>Calculate</Button>
    </form>
  );
}
