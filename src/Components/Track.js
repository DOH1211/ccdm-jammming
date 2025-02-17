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
    <li>
      <p>{track.title}</p>
      <p>
        {track.artistName} | {track.album}{" "}
      </p>
      {renderBtn()}
    </li>
  );
}

export default Track;
