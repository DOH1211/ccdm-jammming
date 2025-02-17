import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Playlist from "./Components/Playlist";
import "./App.css";

const DATA = [
  { id: 1, title: "APT", artistName: "Rese", album: "APT Single" },
  { id: 2, title: "Snow", artistName: "Snow Man", album: "Snow Single" },
];

function App() {
  const [searchResults, setSearchResults] = useState([]);
  // const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlist, setPlaylist] = useState([]);

  const search = (term) => {
    console.log("search click", term);
    setSearchResults(DATA);
  };
  const addTrack = (track) => {
    if (playlist.some((savedSong) => savedSong.id === track.id)) return;

    setPlaylist((prev) => {
      console.log("Adding");
      return [...prev, track];
    });
  };
  const removeTrack = (track) => {
    setPlaylist((prev) => {
      return playlist.filter((savedSong) => {
        return savedSong.id !== track.id;
      });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <SearchBar search={search} />
      <div className="list-wrapper">
        <SearchResults list={searchResults} onAdd={addTrack} />
        <Playlist list={playlist} onRemove={removeTrack} />
      </div>
    </div>
  );
}

export default App;
