// src/hooks/useClient.js
import { useState, useEffect } from "react";
import axios from "axios";

export default function useClient(id = 1) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    async function fetchClient() {
      try {
        const res = await axios.get(`${API_BASE_URL}/client/${id}`);
        if (isMounted) setUser(res.data);
      } catch (err) {
        console.error("Error fetching client:", err);
        if (isMounted) setError("مشکلی در دریافت اطلاعات کاربر پیش آمد");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchClient();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { user, loading, error };
}
