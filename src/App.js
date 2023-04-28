import "./App.css";
// import Bands from "./Bands.js";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  const minusClick = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <button onClick={handleClick}>+</button>
        <button onClick={minusClick}>-</button>
        {/* <Bands content={"BVB"} />
        <Bands content={"MIW"} />
        <Bands content={"INK"} />
        <Bands content={"PAD"} /> */}
      </header>
    </div>
  );
}

export default App;
