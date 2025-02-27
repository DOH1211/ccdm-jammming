import { MyClientID } from "./credential.js";

//// Authorization Code with PKCE Flow

//// Code Challenge
const generateRandomString = (length) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const codeVerifier = generateRandomString(64);
console.log("CV1", codeVerifier);
const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest("SHA-256", data);
};
const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};
const hashed = await sha256(codeVerifier);
const codeChallenge = base64encode(hashed);

//// Response
const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get("code");
console.log(urlParams);
console.log(typeof code);

//// Request User Authorization
const clientId = MyClientID;

const redirectUri = "http://localhost:3000/";

const scope = "user-read-private user-read-email";
const authUrl = new URL("https://accounts.spotify.com/authorize");

// generated in the previous step
window.localStorage.setItem("code_verifier", codeVerifier);

const params = {
  response_type: "code",
  client_id: clientId,
  scope,
  code_challenge_method: "S256",
  code_challenge: codeChallenge,
  redirect_uri: redirectUri,
};

if (!code) {
  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

//// Request an access token
const getToken = async (code) => {
  // stored in the previous step
  const codeVerifier = localStorage.getItem("code_verifier");
  console.log("CV2", codeVerifier, typeof codeVerifier);
  const url = "https://accounts.spotify.com/api/token";
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };

  const body = await fetch(url, payload);
  console.log("BODY", body);
  const response = await body.json();

  localStorage.setItem("access_token", response.access_token);
};
console.log("CODE", code);
const token = await getToken(code);
console.log("TOKEN", localStorage.access_token);
const Spotify = {
  MyClientID,
};

export default Spotify;
