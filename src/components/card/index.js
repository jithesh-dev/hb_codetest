import React from "react";
import "./card.css";

const Card = ({ name }) => {
  return (
    <div className="card">
      <p>{name}</p>
    </div>
  );
};

export default Card;
