import { useEffect, useState } from "react";
import Round from "./Round";

function GameOver() {
  const { round, nextRound: advanceRound } = Round();
  const [finished, setFinished] = useState(false);

  const nextRound = () => {
    if (round >= 3) {
      // ⏳ Wait 2 seconds before showing Game Over
      setTimeout(() => {
        setFinished(true);
      }, 2000);
    } else {
      advanceRound();
    }
  };

  useEffect(() => {
    if (round > 3) {
      setFinished(true); // fallback (edge case)
    }
  }, [round]);

  return { round, nextRound, finished };
}

export default GameOver;
