import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, updatedPlants}) {

  return (
    <ul className="cards">
      {updatedPlants.map((plant)=>(
        <PlantCard
          key={plant.id} plant={plant}
        />
      ))}
    
    </ul>
  );
}

export default PlantList;
