import React from 'react';

const StarShipCard = ({ name, model, manufacturer, costInCredits, length }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>Cost in Credits: {costInCredits}</p>
      <p>Length: {length}</p>
    </div>
  );
};

export default StarShipCard;
