import { useState } from "react";

function Round() {
  const [round, setRound] = useState(1);
  const nextRound = () => {
    setRound((prevRound) => prevRound + 1);
  };
  return { round, setRound, nextRound };
}

export default Round;
