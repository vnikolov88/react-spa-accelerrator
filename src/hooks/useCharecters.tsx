import {
  getAllCharecters,
  GetCharectersResponse,
} from "@/features/rickAndMorty";
import { useCallback, useEffect, useState } from "react";

export default function useCharecters(page = 0) {
  const [data, setData] = useState<GetCharectersResponse>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchCharecters = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const data = await getAllCharecters(page);
      setData(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharecters(page);
  }, [fetchCharecters, page]);

  return { data, loading, error };
}
