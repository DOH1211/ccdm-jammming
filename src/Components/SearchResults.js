import Tracklist from "./Tracklist";

function SearchResults({ list, onAdd }) {
  console.log("Search", list);
  return (
    <div className="list-wrapper">
      <h2 className="sub-title">Search Results</h2>
      <Tracklist list={list} onAdd={onAdd} />
    </div>
  );
}

export default SearchResults;
