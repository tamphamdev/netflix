import API, { Movie } from "../servies/index"
import { useState, useEffect } from "react"

interface IState {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

const initialState: IState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
}

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const fetchMovies = async (searchTerm = "", page: number) => {
    try {
      setLoading(true)

      const movies = await API.fetchMovies(searchTerm, page)

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }))
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }
  useEffect(() => {
    if (!searchTerm) {
      // const sessionState =
    }
  })
}
