import axios from "axios";
import type { Movie, MovieHttpResponse } from "../types/movie";

const myTokken = import.meta.env.VITE_TMDB_TOKEN;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${myTokken}`,
  },
});

export const fetchMovies = async (value: string): Promise<Movie[]> => {
  const res = await api.get<MovieHttpResponse>("/search/movie", {
    params: { query: value },
  });
  return res.data.results;
};
