import Tracklist from "./Tracklist";

function Playlist({ list, onRemove }) {
  return (
    <div>
      <div>
        <h2>Playlist</h2>
        <Tracklist list={list} isRemoval={true} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default Playlist;
