import { useEffect, useState } from "react";

export const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
          {
            signal: controller.signal,
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError(err.message || "An error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [endpoint]);

  return { data, isLoading, error };
};
