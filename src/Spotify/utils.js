export const searchShopify = (term, accessToken) => {
  return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items;
    });
};

export const savePlaylist = (playlistName, accessToken, trackUris) => {
  const headers = { Authorization: `Bearer ${accessToken}` };
  let userId;
  return fetch("https://api.spotify.com/v1/me", { headers: headers })
    .then((response) => response.json())
    .then((jsonResponse) => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ name: playlistName }),
      });
    })
    .then((response) => response.json())
    .then((jsonResponse) => {
      const playlistId = jsonResponse.id;
      return fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
        {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ uris: trackUris }),
        }
      );
    });
};
