// src/hooks/useClient.js
import { useState, useEffect } from "react";
import { getClient } from "../api/client";

export default function useClient(id = 1) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getClient(id)
      .then((data) => setUser(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return { user, loading, error };
}
