import { useState, useEffect, useRef } from "react";
import useTurnLogic from "../services/useTurnLogic";
import GameOver from "../services/GameOver";
import GameOverPage from "./GameOverPage";
import DiceRoll from "./DiceRoll";

function MainPage() {
  const { turn, switchTurn, score1, score2, value, setValue, updateScore } =
    useTurnLogic();
  const { round, nextRound, finished } = GameOver();
  const [halfRound, setHalfRound] = useState(0);
  const [rollingValue, setRollingValue] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const intervalRef = useRef(null);

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);

    // Start rapid rolling animation
    intervalRef.current = setInterval(() => {
      const tempValue = Math.floor(Math.random() * 6) + 1;
      setRollingValue(tempValue);
    }, 200); // Roll every 200ms

    // Stop after 3 seconds
    setTimeout(() => {
      clearInterval(intervalRef.current);
      const finalValue = Math.floor(Math.random() * 6) + 1;
      setRollingValue(finalValue);
      setValue(finalValue);
      updateScore(finalValue);
      switchTurn();
      // nextRound();
      setHalfRound((prev) => prev + 1);
      setIsRolling(false);
    }, 3000); // Match total roll duration
  };

  useEffect(() => {
    if (halfRound === 2) {
      nextRound();
      setHalfRound(0);
    }
  }, [halfRound, nextRound]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Clean on unmount
  }, []);

  if (finished) return <GameOverPage score1={score1} score2={score2} />;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <div className="w-auto h-auto border-4 border-blue-400 bg-gray-700 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Current Turn: {turn}</h2>
        <h2 className="text-2xl font-bold mb-4">Current Round: {round}</h2>
        <h2 className="text-2xl font-bold mb-4">
          {isRolling ? "Rolling..." : `Value: ${value}`}
        </h2>

        <DiceRoll rollingValue={rollingValue} />

        <button
          onClick={rollDice}
          disabled={isRolling}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {isRolling ? "Rolling..." : "Roll Dice"}
        </button>

        <p className="mt-4 text-green-400 font-medium">Player 1: {score1}</p>
        <p className="text-blue-400 font-medium">Player 2: {score2}</p>
      </div>
    </div>
  );
}

export default MainPage;
