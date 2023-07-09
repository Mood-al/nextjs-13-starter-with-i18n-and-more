export const API_URL = "http://127.0.0.1:8000/api";
export const NEXT_URL = "/api";
export const NEXT_URL_PROXY = "/api/proxy";
export const AUTH_URL = `${NEXT_URL_PROXY}/auth`;

// configure the api endpoints to use them in the app
export const API_ENDPOINTS = {
  login: `${API_URL}/login`,
  signup: `${API_URL}/register`,
  signout: `${API_URL}/logout`,
  user: `${API_URL}/user`,
};

export const config = {
  title: "App core",
  description: "a description for the app",
  appIcon: "/appIcon.svg",
  appPwaIconsPath: "/icons",
};
