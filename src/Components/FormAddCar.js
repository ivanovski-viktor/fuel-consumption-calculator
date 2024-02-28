import { useState } from "react";

import Button from "./Button";

export default function FormAddCar({ cars, setCars, showForm }) {
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carImage, setCarImage] = useState(
    "https://source.unsplash.com/random/50x50?sig="
  );

  function handleSubmit(e) {
    e.preventDefault();
    const randomId = crypto.randomUUID();
    if (!carModel || !carImage) return;
    const newCar = {
      id: randomId,
      image: carImage + randomId,
      make: carMake,
      model: carModel,
      fuelConsumption: 0,
    };

    setCars((cs) => [...cs, newCar]);
    showForm(false);
  }

  return (
    <form className="form-add-car" onSubmit={handleSubmit}>
      <label>image</label>
      <input
        value={carImage}
        type="text"
        onChange={(e) => setCarImage(e.target.value)}
      />
      <label>Car Make:</label>
      <input
        value={carMake}
        type="text"
        onChange={(e) => setCarMake(e.target.value)}
      />
      <label>Car Model:</label>
      <input
        value={carModel}
        type="text"
        onChange={(e) => setCarModel(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
