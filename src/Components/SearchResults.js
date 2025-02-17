import Tracklist from "./Tracklist";

function SearchResults({ list, onAdd }) {
  console.log("Search", list);
  return (
    <div>
      <h2>Search Results</h2>
      <Tracklist list={list} onAdd={onAdd} />
    </div>
  );
}

export default SearchResults;
