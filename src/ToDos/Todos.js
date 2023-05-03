import { useState } from "react";
import ListItem from "./ListItem.js";

function Todos() {
  const missions = [];
  const [currentMissions, setMissions] = useState(missions);

  const renderList = (e) => {
    e.preventDefault();
    const newMission = e.target[0].value;
    setMissions([...currentMissions, newMission]);
    e.target[0].value = "";
  };

  const handleDelete = (mission) => {
    const newList = currentMissions.filter((pffrr) => {
      if (pffrr !== mission) return mission;
      else return;
    });
    setMissions(newList);
  };

  return (
    <>
      <form onSubmit={renderList}>
        <label>
          <input type="text"></input>
        </label>
        <button>Add</button>
      </form>
      {currentMissions.map((item, idx) => (
        <ListItem
          handleDelete={handleDelete}
          key={idx}
          missions={item}
          content={item}
        />
      ))}
    </>
  );
}

export default Todos;
