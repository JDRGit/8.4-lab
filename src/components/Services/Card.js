import React from "react";

const Card = ({ starship }) => {
  return (
    <div className="card">
      <h2>{starship.name}</h2>
    </div>
  );
};

export default Card;
