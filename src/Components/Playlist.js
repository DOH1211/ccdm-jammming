import Tracklist from "./Tracklist";

function Playlist({ list, onRemove, playlistName, onChangeName, onSaveName }) {
  const handleChange = ({ target }) => {
    onChangeName(target.value);
  };
  return (
    <div>
      <div>
        <h2>{playlistName}</h2>
        <input type="text" value={playlistName} onChange={handleChange} />
        <button onClick={onSaveName}>Save Playlist Name</button>
        <Tracklist list={list} isRemoval={true} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default Playlist;
