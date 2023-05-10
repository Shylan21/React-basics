import "./App.css";
// import { Quotes } from "./Quotes";
// add all filex name in comments

import { Routes, Route, Link } from "react-router-dom";
import { Input } from "./Input";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        //  => matches anything in the url bar after the /.
        element={<Input />}
      />
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     {/* <Quotes /> */}
    //     <Input />
    //   </header>
    // </div>
  );
}

export default App;
