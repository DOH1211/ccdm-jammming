import { useState } from "react";
import Tracklist from "./Tracklist";

function Playlist({ list, onRemove, playlistName, onSaveName }) {
  const [playListNameInput, setPlayListNameInput] = useState("");
  const handleChange = ({ target }) => {
    setPlayListNameInput(target.value);
  };
  const handleClick = () => {
    onSaveName(playListNameInput);
    setPlayListNameInput("");
  };
  return (
    <div>
      <div>
        <h2>{playlistName}</h2>
        <input type="text" value={playListNameInput} onChange={handleChange} />
        <button onClick={handleClick}>Save Playlist Name</button>
        <Tracklist list={list} isRemoval={true} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default Playlist;
