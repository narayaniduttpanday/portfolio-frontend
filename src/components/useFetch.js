import { useEffect, useState } from "react";

export default function useFetch(fn) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    fn().then(setData).catch(() => setError(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, error, loading: !data && !error };
}
