import { useState } from "react";
import Tracklist from "./Tracklist";
import styles from "./Playlist.module.css";

function Playlist({ list, onRemove, onSaveName }) {
  const [playListNameInput, setPlayListNameInput] = useState("");
  const handleChange = ({ target }) => {
    setPlayListNameInput(target.value);
  };
  const handleClick = () => {
    if (playListNameInput) {
      onSaveName(playListNameInput);
      setPlayListNameInput("");
    }
  };
  return (
    <div>
      <input
        className={styles.playlistTitle}
        type="text"
        placeholder="New Playlist"
        value={playListNameInput}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Save Playlist Name</button>
      <Tracklist list={list} isRemoval={true} onRemove={onRemove} />
    </div>
  );
}

export default Playlist;
