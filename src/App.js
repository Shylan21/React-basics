import "./App.css";
// import { Quotes } from "./Quotes";
// add all filex name in comments

import { Routes, Route, Link } from "react-router-dom";
import { Input, OneInput } from "./Input";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              //  => matches anything in the url bar after the /.
              element={<Input />}
            />
            {/* <Link to={`/${username}/${repo.name}`}>{repo.name}</Link> => plz go here and show what we want with 'route'*/}
            <Route path="/:username/:reponame" element={<OneInput />} />
            {/* I want to match in the url whats inside here */}
          </Routes>
        </header>
      </div>{" "}
    </>
  );
  {
    /*    {/* <Quotes /> */
  }
  {
    /*      <Input /> */
  }
}

export default App;
