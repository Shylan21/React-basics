/* App.js file */
import "./App.css";
import { Dice } from ".src/Dice/Dice.js";

/* What state? */
/* [1,1,1,1,1,] */

const initialDice = [1, 1, 1, 1, 1];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dice dice={initialDice} />
      </header>
    </div>
  );
}
export default App;
