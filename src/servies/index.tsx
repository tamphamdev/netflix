import {
  API_KEY,
  API_URL,
  LOGIN_URL,
  REQUEST_TOKEN_URL,
  SEARCH_BASE_URL,
  SESSION_ID_URL,
  TRENDING_BASE_URL,
} from "../config"

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
}

export interface Movie {
  backdrop_path: string
  id: number
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  title: string
  vote_average: number
  vote_count: number
  budget: number
  runtime: number
  revenue: number
  release_date: string
}

export interface Movies {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

const apiSetting = {
  fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
    const endPoint: string = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${TRENDING_BASE_URL}&page=${page}`

    return await (await fetch(endPoint)).json()
  },

  fetchMovie: async (movieId: string | number): Promise<Movie> => {
    const endPoint: string = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

    return await (await fetch(endPoint)).json()
  },

  getRequestToken: async (): Promise<string> => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json()
    return reqToken.request_token
  },

  authenticate: async (
    requestToken: string,
    username: string,
    password: string | number
  ) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    }

    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json()

    if (data.success) {
      const sesssionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json()

      return sesssionId
    }
  },
}

export default apiSetting
