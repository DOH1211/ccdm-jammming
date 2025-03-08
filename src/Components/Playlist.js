import { useState } from "react";
import Tracklist from "./Tracklist";
import styles from "./Playlist.module.css";
import Button from "../UI/Button";

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
    <div className="list-wrapper">
      <input
        className={`${styles.inputTitle} sub-title`}
        type="text"
        placeholder="New Playlist"
        value={playListNameInput}
        onChange={handleChange}
      />
      <Button
        className="btn btn-small"
        onClick={handleClick}
        btnText="Save Playlist Name"
      />

      <Tracklist list={list} isRemoval={true} onRemove={onRemove} />
    </div>
  );
}

export default Playlist;
