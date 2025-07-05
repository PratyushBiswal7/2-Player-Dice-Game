import { useEffect, useRef } from "react";
import Dice from "react-dice-roll";

function DiceRoll({ rollingValue }) {
  const diceRef = useRef();

  useEffect(() => {
    if (diceRef.current && rollingValue !== null) {
      diceRef.current.rollDice(rollingValue); // Triggers animation
    }
  }, [rollingValue]);

  return (
    <div className="flex flex-col items-center">
      <Dice
        ref={diceRef}
        size={80}
        rollingTime={0.3} // Short time for rapid animation
        sound={true}
        disabled={true}
      />
    </div>
  );
}

export default DiceRoll;
