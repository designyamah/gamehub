import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface Platform{
  id:number;
  name:string;
  slug:string
}

// interface Platformparent{
//   platform:platform[]
// }


export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform }[];
    metacritic:number;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
    next:string
  }
  

const useGames = (selectedGenre:number | null,selectedPlatform:number | null, selectedSort:string,selctedSearch:string,selctedPage:number) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    //for aborting
    const controller = new AbortController()
    //for setting the loadeing state 
    setIsloading(true)
    // for removinf the previos games item
    setGames([]);
    //api call hhtp request
    apiClient
      .get<FetchGamesResponse>("/games",{signal: controller.signal,
        params:{
          genres:selectedGenre,
          platforms:selectedPlatform,
          ordering:selectedSort,
          search:selctedSearch,
          page:selctedPage
        }
      })
      .then((res) => {setGames(res.data.results); setIsloading(false); console.log(res.data.next)})
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setIsloading(false);
    });
    console.log(selectedGenre)

      return () => controller.abort()
  }, [selectedGenre,selectedPlatform,selectedSort,selctedSearch,selctedPage]);

  return {games,setGames, error, setError, isloading}
}

export default useGames;