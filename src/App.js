import FormFuelConsCalculator from "./Components/FormFuelConsCalculator";
import Button from "./Components/Button";
import CarList from "./Components/CarList";
import FormAddCar from "./Components/FormAddCar";
import { useState } from "react";
const initialCars = [
  {
    id: 213124,
    image: "https://source.unsplash.com/random/50x50?sig=213",
    make: "Audi",
    model: "A5",
    fuelConsumption: 0,
  },
];
export default function App() {
  const [showAddCarForm, setShowAddCarForm] = useState(false);
  const [cars, setCars] = useState(initialCars);
  const [selectedCar, setSelectedCar] = useState(null);
  // const [fuelConsumption, setFuelConsumption] = useState(0);

  function handleShowAddCar() {
    setShowAddCarForm((cs) => !cs);
  }
  function handleSelectCar(car) {
    setSelectedCar((cs) => (cs?.id === car.id ? null : car));
  }
  return (
    <div className="app">
      <div className="sidebar">
        <CarList
          data={cars}
          selectedCar={selectedCar}
          handleSelectCar={handleSelectCar}
        />

        {showAddCarForm && (
          <FormAddCar
            cars={cars}
            setCars={setCars}
            showForm={setShowAddCarForm}
          />
        )}
        <Button onClick={handleShowAddCar}>
          {showAddCarForm ? "Close" : "Add Car"}
        </Button>
      </div>
      {selectedCar && (
        <FormFuelConsCalculator
          cars={cars}
          setCars={setCars}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
        />
      )}
    </div>
  );
}
