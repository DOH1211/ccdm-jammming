export const generateCodeVerifier = () => {
  const array = new Uint8Array(64);
  window.crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/[+/=]/g, "") // Removed unnecessary escaping
    .substr(0, 128); // Return only the first 128 characters
};

export const generateCodeChallenge = async (codeVerifier) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);

  const base64Url = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)))
    .replace("+", "-") // Convert base64 '+' to base64url '-'
    .replace("/", "_") // Convert base64 '/' to base64url '_'
    .replace(/=+$/, ""); // Remove any trailing equals signs
  return base64Url;
};
