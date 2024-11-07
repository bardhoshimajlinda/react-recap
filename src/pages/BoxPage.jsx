import { useState } from "react";
import Box from "../components/Box";
import boxdata from "../components/boxdata";

const BoxPage = () => {
  const [boxes, setBoxes] = useState(boxdata);

  function toggle(id) {
    setBoxes((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  return (
    <div className="box-container">
      {boxes.map((box) => {
        return (
          <Box
            key={box.id}
            id={box.id}
            on={box.on}
            toggle={() => toggle(box.id)}
          />
        );
      })}
    </div>
  );
};

export default BoxPage;
