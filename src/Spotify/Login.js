import React, { useEffect, useState } from "react";

import axios from "axios";
import queryString from "query-string";
import { generateCodeVerifier, generateCodeChallenge } from "./pkce.js";

import { MyClientID } from "./credential.js";
import Button from "../UI/Button.js";

const clientId = MyClientID;
const redirectUri = "http://localhost:3000/callback";
const authUrl = "https://accounts.spotify.com/authorize";
const tokenUrl = "https://accounts.spotify.com/api/token";

const Login = ({ onToken }) => {
  // const [token, setToken] = useState(null); // moved to App.js

  const loginWithSpotify = async () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    localStorage.setItem("code_verifier", codeVerifier);

    const params = new URLSearchParams({
      client_id: clientId,
      response_type: "code",
      redirect_uri: redirectUri,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
      scope: "user-read-private user-read-email playlist-modify-public",
    });

    window.location = `${authUrl}?${params.toString()}`;
  };

  useEffect(() => {
    const { code } = queryString.parse(window.location.search);
    if (code) {
      exchangeToken(code);

      // Remove Code from URL to prevent the second exchangeToken call with the same code.
      const url = new URL(window.location.href);
      url.searchParams.delete("code");

      const updatedUrl = url.search ? url.href : url.href.replace("?", "");
      window.history.replaceState({}, document.title, updatedUrl);
    }
  }, []);

  const exchangeToken = async (code) => {
    const codeVerifier = localStorage.getItem("code_verifier");

    const params = new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    });

    try {
      const response = await axios.post(tokenUrl, params, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      // setToken(response.data.access_token);

      onToken(response.data.access_token);
      localStorage.setItem("access_token", response.data.access_token);
    } catch (error) {
      console.error("Error exchanging code for token", error);
    }
  };

  return (
    <div className="pt5">
      <Button
        className="btn btn-large"
        onClick={loginWithSpotify}
        btnText="Login with Spotyfy"
      />
    </div>
  );
};

export default Login;
