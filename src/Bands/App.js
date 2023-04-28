import "./App.css";
import Bands from "./src/Bands/Bands.js";

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
       
        <Bands content={"BVB"} />
        <Bands content={"MIW"} />
        <Bands content={"INK"} />
        <Bands content={"PAD"} />
      </header>
    </div>
  );
}

export default App;
