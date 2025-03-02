import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Playlist from "./Components/Playlist";
import "./App.css";

import Login from "./Spotify/Login.js";

const DATA = {
  href: "https://api.spotify.com/v1/search?offset=0&limit=3&query=bts&type=track&market=us&locale=en-US,en;q%3D0.9",
  limit: 3,
  next: "https://api.spotify.com/v1/search?offset=3&limit=3&query=bts&type=track&market=us&locale=en-US,en;q%3D0.9",
  offset: 0,
  previous: null,
  total: 103,
  items: [
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
            },
            href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
            id: "3Nrfpe0tUJi4K4DXYWgMUX",
            name: "BTS",
            type: "artist",
            uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/6nYfHQnvkvOTNHnOhDT3sr",
        },
        href: "https://api.spotify.com/v1/albums/6nYfHQnvkvOTNHnOhDT3sr",
        id: "6nYfHQnvkvOTNHnOhDT3sr",
        images: [
          {
            height: 640,
            width: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273c07d5d2fdc02ae252fcd07e5",
          },
          {
            height: 300,
            width: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02c07d5d2fdc02ae252fcd07e5",
          },
          {
            height: 64,
            width: 64,
            url: "https://i.scdn.co/image/ab67616d00004851c07d5d2fdc02ae252fcd07e5",
          },
        ],
        is_playable: true,
        name: "BE",
        release_date: "2020-11-20",
        release_date_precision: "day",
        total_tracks: 8,
        type: "album",
        uri: "spotify:album:6nYfHQnvkvOTNHnOhDT3sr",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
          },
          href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
          id: "3Nrfpe0tUJi4K4DXYWgMUX",
          name: "BTS",
          type: "artist",
          uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
        },
      ],
      disc_number: 1,
      duration_ms: 199053,
      explicit: false,
      external_ids: {
        isrc: "QM7282022872",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/5QDLhrAOJJdNAmCTJ8xMyW",
      },
      href: "https://api.spotify.com/v1/tracks/5QDLhrAOJJdNAmCTJ8xMyW",
      id: "5QDLhrAOJJdNAmCTJ8xMyW",
      is_local: false,
      is_playable: true,
      name: "Dynamite",
      popularity: 76,
      preview_url: null,
      track_number: 8,
      type: "track",
      uri: "spotify:track:5QDLhrAOJJdNAmCTJ8xMyW",
    },
    {
      album: {
        album_type: "single",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
            },
            href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
            id: "3Nrfpe0tUJi4K4DXYWgMUX",
            name: "BTS",
            type: "artist",
            uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/0PBQ3Cp6NG8WX0G9KQVNMP",
        },
        href: "https://api.spotify.com/v1/albums/0PBQ3Cp6NG8WX0G9KQVNMP",
        id: "0PBQ3Cp6NG8WX0G9KQVNMP",
        images: [
          {
            height: 640,
            width: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273240447f2da1433d8f4303596",
          },
          {
            height: 300,
            width: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02240447f2da1433d8f4303596",
          },
          {
            height: 64,
            width: 64,
            url: "https://i.scdn.co/image/ab67616d00004851240447f2da1433d8f4303596",
          },
        ],
        is_playable: true,
        name: "Butter (Hotter, Sweeter, Cooler)",
        release_date: "2021-06-04",
        release_date_precision: "day",
        total_tracks: 5,
        type: "album",
        uri: "spotify:album:0PBQ3Cp6NG8WX0G9KQVNMP",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
          },
          href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
          id: "3Nrfpe0tUJi4K4DXYWgMUX",
          name: "BTS",
          type: "artist",
          uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
        },
      ],
      disc_number: 1,
      duration_ms: 164441,
      explicit: false,
      external_ids: {
        isrc: "QM6MZ2156864",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/1mWdTewIgB3gtBM3TOSFhB",
      },
      href: "https://api.spotify.com/v1/tracks/1mWdTewIgB3gtBM3TOSFhB",
      id: "1mWdTewIgB3gtBM3TOSFhB",
      is_local: false,
      is_playable: true,
      name: "Butter",
      popularity: 63,
      preview_url: null,
      track_number: 1,
      type: "track",
      uri: "spotify:track:1mWdTewIgB3gtBM3TOSFhB",
    },
    {
      album: {
        album_type: "single",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4Gso3d4CscCijv0lmajZWs",
            },
            href: "https://api.spotify.com/v1/artists/4Gso3d4CscCijv0lmajZWs",
            id: "4Gso3d4CscCijv0lmajZWs",
            name: "Don Toliver",
            type: "artist",
            uri: "spotify:artist:4Gso3d4CscCijv0lmajZWs",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4hTb6DnLgjnsz9SgibDYS4",
            },
            href: "https://api.spotify.com/v1/artists/4hTb6DnLgjnsz9SgibDYS4",
            id: "4hTb6DnLgjnsz9SgibDYS4",
            name: "Speedy",
            type: "artist",
            uri: "spotify:artist:4hTb6DnLgjnsz9SgibDYS4",
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0b1sIQumIAsNbqAoIClSpy",
            },
            href: "https://api.spotify.com/v1/artists/0b1sIQumIAsNbqAoIClSpy",
            id: "0b1sIQumIAsNbqAoIClSpy",
            name: "j-hope",
            type: "artist",
            uri: "spotify:artist:0b1sIQumIAsNbqAoIClSpy",
          },
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/5AbAAzC0jBy4teVgpRbFPj",
        },
        href: "https://api.spotify.com/v1/albums/5AbAAzC0jBy4teVgpRbFPj",
        id: "5AbAAzC0jBy4teVgpRbFPj",
        images: [
          {
            height: 640,
            width: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273dfc73dd3650ca98893f8b905",
          },
          {
            height: 300,
            width: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02dfc73dd3650ca98893f8b905",
          },
          {
            height: 64,
            width: 64,
            url: "https://i.scdn.co/image/ab67616d00004851dfc73dd3650ca98893f8b905",
          },
        ],
        is_playable: true,
        name: "LV Bag (feat. j-hope of BTS & Pharrell Williams)",
        release_date: "2025-02-21",
        release_date_precision: "day",
        total_tracks: 1,
        type: "album",
        uri: "spotify:album:5AbAAzC0jBy4teVgpRbFPj",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/4Gso3d4CscCijv0lmajZWs",
          },
          href: "https://api.spotify.com/v1/artists/4Gso3d4CscCijv0lmajZWs",
          id: "4Gso3d4CscCijv0lmajZWs",
          name: "Don Toliver",
          type: "artist",
          uri: "spotify:artist:4Gso3d4CscCijv0lmajZWs",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/4hTb6DnLgjnsz9SgibDYS4",
          },
          href: "https://api.spotify.com/v1/artists/4hTb6DnLgjnsz9SgibDYS4",
          id: "4hTb6DnLgjnsz9SgibDYS4",
          name: "Speedy",
          type: "artist",
          uri: "spotify:artist:4hTb6DnLgjnsz9SgibDYS4",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/0b1sIQumIAsNbqAoIClSpy",
          },
          href: "https://api.spotify.com/v1/artists/0b1sIQumIAsNbqAoIClSpy",
          id: "0b1sIQumIAsNbqAoIClSpy",
          name: "j-hope",
          type: "artist",
          uri: "spotify:artist:0b1sIQumIAsNbqAoIClSpy",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8",
          },
          href: "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8",
          id: "2RdwBSPQiwcmiDo9kixcl8",
          name: "Pharrell Williams",
          type: "artist",
          uri: "spotify:artist:2RdwBSPQiwcmiDo9kixcl8",
        },
      ],
      disc_number: 1,
      duration_ms: 182603,
      explicit: true,
      external_ids: {
        isrc: "USAT22500788",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/1MhXchY126AX5Iuv4Odbe8",
      },
      href: "https://api.spotify.com/v1/tracks/1MhXchY126AX5Iuv4Odbe8",
      id: "1MhXchY126AX5Iuv4Odbe8",
      is_local: false,
      is_playable: true,
      name: "LV Bag (feat. j-hope of BTS & Pharrell Williams)",
      popularity: 72,
      preview_url: null,
      track_number: 1,
      type: "track",
      uri: "spotify:track:1MhXchY126AX5Iuv4Odbe8",
    },
  ],
};

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlist, setPlaylist] = useState([]);
  const [token, setToken] = useState(null);

  const handleToken = (token) => {
    setToken(token);
  };

  const search = (term) => {
    console.log("search click", term);
    setSearchResults(DATA.items);
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

  const savePlaylistName = (name) => {
    setPlaylistName(name);
    const playlistTrackUris = playlist.map((track) => track.uri);
    console.log(playlistTrackUris);
    setPlaylistName("New Playlist");
    setPlaylist([]);
  };

  useEffect(() => {
    if (playlistName) {
      console.log(playlistName);
      console.log(playlist);
    }
  }, [playlistName]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      {!token ? (
        <div className="m2">
          <Login onToken={handleToken} />
        </div>
      ) : (
        <div>
          <SearchBar search={search} />
          <div className="list-wrapper">
            <SearchResults list={searchResults} onAdd={addTrack} />
            <Playlist
              list={playlist}
              onRemove={removeTrack}
              playlistName={playlistName}
              onSaveName={savePlaylistName}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
