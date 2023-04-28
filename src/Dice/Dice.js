/* Dice.js file */

import { useState } from "react";

function Dice(props) {
  const dice = props.dice;

  const [currentDice, setCurrentDice] = useState(dice);
  const handleClick = () => {
    const newDice = currentDice.map((item) =>
      Math.floor(Math.random(item) * 6 + 1)
    );
    setCurrentDice(newDice);
  };
  return (
    <div>
      {dice.map((die) => (
        <span> {die} </span>
      ))}
      <button onClick={handleClick}>Roll!</button>
    </div>
  );
}

export default Dice;
