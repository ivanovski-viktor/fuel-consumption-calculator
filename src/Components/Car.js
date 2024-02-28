import Button from "./Button";

export default function Car({
  image,
  make,
  model,
  fuelConsumption,
  handleSelectCar,
  selectedCar,
  car,
}) {
  return (
    <li className="carCard">
      <div className="cardContent">
        <img src={image} alt="Car" />
        <span>{make}</span>
        <span>{model}</span>
        <span>Fuel Consumption per 100km: {fuelConsumption}L</span>
      </div>
      <Button onClick={handleSelectCar}>
        {" "}
        {selectedCar?.id === car.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}
