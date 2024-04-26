import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [ playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing); // react schedules the update to the state, which takes a certain amount of time, so it's not instantaneous
        //setIsEditing((editing) => !editing); //it's best practice to use a function instead of !editing to make the state chandge for that reason
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';


    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
        //btnCaption = 'Save'; 
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
};