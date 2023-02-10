import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, updatedPlants}) {

  function handleDeletePlant(deletedPlant){
    const updatedPlants = plants.filter((plant) => plant.id !== deletedPlant.id)
    setPlants(updatedPlants)
  }

  function handleUpdatedPrice(updatedPlant){
    const updatedPlants = plants.map((plant) => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return plant;
      }
    });
    setPlants(updatedPlants)
  }

  return (
    <ul className="cards">
      {updatedPlants.map((plant)=>(
        <PlantCard
          key={plant.id} plant={plant} 
          onDeletePlant={handleDeletePlant} 
          onUpdatePrice={handleUpdatedPrice}
        />
      ))}
    
    </ul>
  );
}

export default PlantList;
