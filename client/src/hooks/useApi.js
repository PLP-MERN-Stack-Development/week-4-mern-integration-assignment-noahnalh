import { useEffect, useState } from "react";

export default function useApi(fetchFn) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFn()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
