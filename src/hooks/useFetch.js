/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)
      if (!res.ok) {
        setError("fail to fetch")
      }
      const result = await res.json()
      setData (result.data)
      setLoading(false)
    } catch (error) {
      setError(error.message)
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
