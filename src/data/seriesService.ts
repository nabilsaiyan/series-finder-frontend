import axios, { AxiosResponse } from "axios";
import { Serie } from "../types/Serie";
import { TMDB_API_IMG_BASE_URL, API_BASE_URL } from "../utils/constants";

async function searchByKeyword(query: string): Promise<Serie[]> {
  const url = `${API_BASE_URL}/series/search`;

  try {
    const response: AxiosResponse = await axios.get(url, {
      params: {
        keyword: query,
      },
    });
    const matchingSeries: Serie[] = response.data.map((serie: Serie) => ({
      ...serie,
      poster_path: TMDB_API_IMG_BASE_URL + serie.poster_path,
      backdrop_path: TMDB_API_IMG_BASE_URL + serie.backdrop_path,
    }));

    return matchingSeries;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to fetch API method: ", error.message);
      throw new Error("Failed to fetch API method");
    } else {
      console.error("An unknown error occurred: ", error);
      throw new Error("An unknown error occurred");
    }
  }
}

async function getTrendingSeries(): Promise<Serie[]> {
  const url = `${API_BASE_URL}/series/trending`;

  try {
    const response: AxiosResponse = await axios.get(url);
    const matchingSeries: Serie[] = response.data.map((serie: Serie) => ({
      ...serie,
      poster_path: TMDB_API_IMG_BASE_URL + serie.poster_path,
      backdrop_path: TMDB_API_IMG_BASE_URL + serie.backdrop_path,
    }));

    return matchingSeries;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to fetch API method: ", error.message);
      throw new Error("Failed to fetch API method");
    } else {
      console.error("An unknown error occurred: ", error);
      throw new Error("An unknown error occurred");
    }
  }
}

export { searchByKeyword, getTrendingSeries };
