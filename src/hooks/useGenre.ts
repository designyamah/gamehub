import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
  }
  
interface FetchGenreResponse {
    count: number;
    results: Genre[];
  }
  

const useGenre = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    //for aborting
    const controller = new AbortController()
    apiClient
      .get<FetchGenreResponse>("/genres", {signal: controller.signal})
      .then((res) => setGenre(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
    });

      return () => controller.abort()
  }, []);

  return {genre,setGenre, error, setError}
}

export default useGenre;