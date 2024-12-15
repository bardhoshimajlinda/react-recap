import React, { useState } from "react";
import data from "../components/dataGameMemory";

const MemoryGame = () => {
  const [cards, setCards] = useState(
    [...data]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, flipped: false, disabled: false }))
  );
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disableAll, setDisableAll] = useState(false);

  const handleCardClick = (card) => {
    if (disableAll || card.disabled || card.flipped) return;

    setCards((prevCards) =>
      prevCards.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
    );

    if (!firstCard) {
      setFirstCard(card);
    } else if (!secondCard) {
      setSecondCard(card);
      checkForMatch(card);
    }
  };

  const checkForMatch = (currentCard) => {
    setDisableAll(true);

    if (firstCard.name === currentCard.name) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.name === currentCard.name ? { ...card, disabled: true } : card
        )
      );
      resetSelection();
    } else {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCard.id || card.id === currentCard.id
              ? { ...card, flipped: false }
              : card
          )
        );
        resetSelection();
      }, 1000);
    }
  };

  const resetSelection = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisableAll(false);
  };

  return (
    <div className="home-container">
      <h1>Memory Match Game</h1>
      <div className="board">
        {cards.map((card) => (
          <div
            className={`memory-card ${card.flipped ? "flipped" : ""}`}
            key={card.id}
            onClick={() => handleCardClick(card)}
          >
            {card.flipped || card.disabled ? card.name : "?"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
