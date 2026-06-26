import axios from "axios";

export async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjc2UyMzI1N0BnbGJpdG0uYWMuaW4iLCJleHAiOjE3ODI0NTk1MTUsImlhdCI6MTc4MjQ1ODYxNSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjFiZjQ0MTc4LTY1YzQtNDQzNy1hYTBiLTc5MThmMTM5NWEwMyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InBpeXVzaCBndXB0YSIsInN1YiI6IjU4N2I2MjNlLTZjNTYtNDU5OS04Zjg4LWI2N2UzMThjNjgwOSJ9LCJlbWFpbCI6ImNzZTIzMjU3QGdsYml0bS5hYy5pbiIsIm5hbWUiOiJwaXl1c2ggZ3VwdGEiLCJyb2xsTm8iOiIyMzAxOTIwMTAwMjE2IiwiYWNjZXNzQ29kZSI6Inh4a0puayIsImNsaWVudElEIjoiNTg3YjYyM2UtNmM1Ni00NTk5LThmODgtYjY3ZTMxOGM2ODA5IiwiY2xpZW50U2VjcmV0Ijoic0REZEVuUlhyRnpHbldQRCJ9.YOZJ1KLtFXCmjjEpuZtBdmPtE5DuJK0fzZBKiSAy_tg",
        },
      },
    );
    return response.data;
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}
