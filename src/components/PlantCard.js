import React, {useState} from "react";

function PlantCard({plant, onDeletePlant, onUpdatePrice}) {
  const [isInStock, setInStock] = useState(true)
  const [isHidden, setHidden] = useState("hidden")
  const [btnClass, setBtnClass] = useState("primary")
  const [newPrice, setNewPrice] = useState(0)

  function handleStockClick(){
    isInStock ? setInStock(false) : setInStock(true)
  }

  function handleDeleteClick(){
    console.log("delete", plant.name, plant.id)
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeletePlant(plant));
  }

  function handleUpdateClick(){
    btnClass ==="" ? setBtnClass("primary") : setBtnClass("")
    isHidden ? setHidden("") : setHidden("hidden")
  }

  function handleSubmitPrice(e){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": 'application/json',
      }, 
      body: JSON.stringify({
        price: newPrice,
      }),
    })
    .then((r)=> r.json())
    .then((updatedPlant)=> onUpdatePrice(updatedPlant))
    isHidden ? setHidden("") : setHidden("hidden")
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={handleStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
      <div>
       <button onClick={handleUpdateClick} className={btnClass}>Update Price</button>
        <form hidden={isHidden} onSubmit={handleSubmitPrice}>
          <input type="number" name="new-price" step="0.01" placeholder="Enter new price" 
            onChange={(e)=> setNewPrice(e.target.value)} 
          />
          <button type="submit" className="primary">Submit New Price</button>
       </form>
      </div>
      
      <button onClick={handleDeleteClick}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
