import "./App.css";
// import { Quotes } from "./Quotes";
// add all filex name in comments

import { Routes, Route, Link } from "react-router-dom";
import { Repos, Repo } from "./Input";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Routes>
            <Route
              path="/"
              //  => matches anything in the url bar after the /.
              element={<Repos />}
            />
            {/* <Link to={`/${username}/${repo.name}`}>{repo.name}</Link> => plz go here and show what we want with 'route'*/}
            <Route path="/:username/:reponame" element={<Repo />} />
            {/* I want to match in the url whats inside here */}
          </Routes>
        </header>
      </div>
    </>
  );
}

export default App;
