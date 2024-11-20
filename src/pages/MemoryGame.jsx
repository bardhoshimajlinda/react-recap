import React from "react";
import { useState } from "react";
import data from "../components/dataGameMemory";

const MemoryGame = () => {
  const [cards, setCards] = useState(data);

  return (
    <div className="home-container">
      <h1>Match</h1>
      <div className="board">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MemoryGame;
