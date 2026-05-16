import { useEffect,useState } from "react";



const cache = {};

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currency) return;

    async function fetchRates() {
      if (cache[currency]) {
        setData(cache[currency]);
        return;
      }

      setLoading(true);

      try {
        const res = await fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        );

        const json = await res.json();

        cache[currency] = json[currency];
        setData(json[currency]);

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRates();
  }, [currency]);

  return { data, loading };
}