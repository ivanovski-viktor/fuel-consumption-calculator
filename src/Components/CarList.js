import Car from "./Car";

export default function CarList({ data, handleSelectCar, selectedCar }) {
  return (
    <ul>
      {data.map((car) => (
        <Car
          car={car}
          key={car.id}
          image={car.image}
          make={car.make}
          model={car.model}
          fuelConsumption={car.fuelConsumption}
          handleSelectCar={(e) => handleSelectCar(car)}
          selectedCar={selectedCar}
        />
      ))}
    </ul>
  );
}
