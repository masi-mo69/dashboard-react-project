import { useEffect, useState } from "react";
import axios from "axios";

export default function useDomainPricing() {
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const res = await axios.get(`${API_BASE_URL}/tld/pricing`);
        setPrices(res.data.pricing);
      } catch (err) {
        console.error("Error fetching domain prices:", err);
        setError("مشکلی در دریافت قیمت‌ها پیش آمد");
      } finally {
        setLoading(false);
      }
    }

    fetchPrices();
  }, []);

  return { prices, loading, error };
}
