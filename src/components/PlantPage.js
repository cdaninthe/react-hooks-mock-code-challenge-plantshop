import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then ((r)=> r.json())
    .then((plants)=>setPlants(plants))
  }, [])

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  const updatedPlants = plants.filter((plant) => (
    plant.name.toLowerCase().includes(search.toLowerCase())
  ))

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={plants} updatedPlants={updatedPlants}/>
    </main>
  );
}

export default PlantPage;
