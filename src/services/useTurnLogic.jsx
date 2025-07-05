import { useState } from "react";

// useTurnLogic.js (or wherever your logic is)
function useTurnLogic() {
  const [turn, setTurn] = useState("Player1");
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [value, setValue] = useState(0);

  const switchTurn = () => {
    setTurn((prevTurn) => (prevTurn === "Player1" ? "Player2" : "Player1"));
  };

  const updateScore = (newValue) => {
    if (turn === "Player1") {
      setScore1((prev) => prev + newValue);
    } else {
      setScore2((prev) => prev + newValue);
    }
  };

  return {
    turn,
    switchTurn,
    score1,
    score2,
    value,
    setValue,
    updateScore,
  };
}

export default useTurnLogic;
