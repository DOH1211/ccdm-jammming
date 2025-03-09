export const generateCodeVerifier = () => {
  const array = new Uint8Array(64);
  window.crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/[\+\/=]/g, "")
    .substr(0, 128);
};

export const generateCodeChallenge = async (codeVerifier) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  // const base64Url = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)))
  //   .replace(/\+/g, "-")
  //   .replace(/\//g, "_")
  //   .replace(/=+$/, "");
  const base64Url = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)))
    .replace("+", "-")
    .replace("/", "_")
    .replace(/=+$/, "");
  return base64Url;
};
