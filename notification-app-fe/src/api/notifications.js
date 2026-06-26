import axios from "axios";
import { Log } from "../utils/logger";

const BASE_URL = "http://4.224.186.213/evaluation-service";
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export async function fetchNotifications({
  page = 1,
  limit = 10,
  notificationType,
}) {
  try {
    await Log("frontend", "info", "api", "Fetching notifications");

    const response = await axios.get(`${BASE_URL}/notifications`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      params: {
        page,
        limit,
        notification_type:
          notificationType && notificationType !== "All"
            ? notificationType
            : undefined,
      },
    });

    await Log("frontend", "info", "api", "Notifications fetched successfully");

    return response.data;
  } catch (err) {
    await Log("frontend", "error", "api", err.message);
    throw err;
  }
}
