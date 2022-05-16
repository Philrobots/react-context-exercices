import React, { useEffect, useState } from 'react'
import Client from "../../Ui/api/Clients";
import { limit } from "../../Ui/api/limit";
import Cat from "../domain/Cat";

export default function useCats(page: number) {

  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        setLoading(true);
        const client = new Client({ baseUrl: "https://api.thecatapi.com", endpoint: `/v1/images/search?limit=${limit}&page=${page}` });
        const response = await client.get();
        const cats = response.response as Cat[];
        setCats(cats);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCat();

  }, [page]);


  return { cats, loading, error }
}
