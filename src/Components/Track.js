import styles from "./Track.module.css";
import Button from "../UI/Button";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Track({ track, onAdd, onRemove, isRemoval }) {
  const addTrack = () => {
    console.log("ADD");
    onAdd(track);
  };
  const removeTrack = () => {
    onRemove(track);
  };

  const renderBtn = () => {
    if (isRemoval) {
      return (
        <Button
          className="btn btn-mini"
          onClick={removeTrack}
          faIcon={faMinus}
          miniBtn={true}
        />
      );
    } else {
      return (
        <Button
          className="btn btn-mini"
          onClick={addTrack}
          faIcon={faPlus}
          miniBtn={true}
        />
      );
    }
  };
  return (
    <li className={styles.track}>
      <div>
        <h3>{track.name}</h3>
        <p>
          {track.artists[0].name} | {track.album.name}
        </p>
      </div>
      {renderBtn()}
    </li>
  );
}

export default Track;
