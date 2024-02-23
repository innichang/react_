import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  console.log("initial isEditing: ", isEditing);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  function handleUpdateValue(newPlayerName) {
    name = newPlayerName;
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = 'Edit';


  console.log("state updated isEditing: ", isEditing);

  if (isEditing) {
    playerName = <input type="text" required value={name} onChange={() => handleUpdateValue(name)}/>;
    btnCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
