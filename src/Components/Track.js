import styles from "./Track.module.css";

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
      return <button onClick={removeTrack}>-</button>;
    } else {
      return <button onClick={addTrack}>+</button>;
    }
  };
  return (
    <li className={styles.track}>
      <div>
        <p>{track.title}</p>
        <p>
          {track.artistName} | {track.album}{" "}
        </p>
      </div>
      {renderBtn()}
    </li>
  );
}

export default Track;
