import React, {useState} from "react";

function PlantCard({plant}) {
  const [isInStock, setInStock] = useState(true)

  function handleStockClick(){
    isInStock ? setInStock(false) : setInStock(true)
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
    </li>
  );
}

export default PlantCard;
