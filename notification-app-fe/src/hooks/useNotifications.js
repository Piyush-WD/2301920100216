import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";
import { Log } from "../utils/logger";

export function useNotifications(page, filter) {
  console.log("useNotifications called");
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        await Log("frontend", "info", "hook", "Loading notifications");
        const data = await fetchNotifications({
          page,
          limit: 10,
          notificationType: filter,
        });
        console.log(data);

        setNotifications(data.notifications ?? []);
        await Log(
          "frontend",
          "info",
          "hook",
          `${data.notifications?.length ?? 0} notifications loaded`,
        );
      } catch (err) {
        await Log("frontend", "error", "hook", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, filter]);

  const totalPages = notifications.length === 10 ? page + 1 : page; //We can not get the total notification count from backend, hence using this approach for time being

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}
