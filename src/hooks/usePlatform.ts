import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface GamePaltform {
    id: number;
    name: string;
  }
  
interface FetchPlatformParentSingleResponse {
    count: number;
    results: GamePaltform[];
  }
  

const usePlatform = () => {
  const [platform, setPlatform] = useState<GamePaltform[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    //for aborting
    const controller = new AbortController()
    apiClient
      .get<FetchPlatformParentSingleResponse>("/platforms/lists/parents", {signal: controller.signal})
      .then((res) => setPlatform(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
    });

      return () => controller.abort()
  }, []);

  return {platform,setPlatform, error, setError}
}

export default usePlatform;