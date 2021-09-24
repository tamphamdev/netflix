// Configuration for TMDB API
// Read more about the API here:  https://developers.themoviedb.org/

const API_URL: string = "https://api.themoviedb.org/3/"
const API_KEY: string | Boolean = "4e66dd39e667641bf810887e1c81e1e4" || "false"

//Base api url
const NETWORK: string = "213" // Netflix
const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`
const TRENDING_BASE_URL: string = `${API_URL}trending/all/day?with_networks=${NETWORK}&api_key=${API_KEY}`

// For login & authentication
const REQUEST_TOKEN_URL: string = `${API_URL}authentication/token/new?api_key=${API_KEY}`
const LOGIN_URL: string = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`
const SESSION_ID_URL: string = `${API_URL}authentication/session/new?api_key=${API_KEY}`

const IMAGE_BASE_URL: string = `http://image.tmdb.org/t/p/`

export {
  SEARCH_BASE_URL,
  TRENDING_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  SESSION_ID_URL,
  IMAGE_BASE_URL,
  LOGIN_URL,
}
