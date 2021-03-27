const express = require("express");
const cache = require("./clients/Cache");
const app = express();
const PORT = 3000;

app.get("/status", (request, response) => {
  return response.json({ status: "online" });
});

app.get("/username/:username", async (request, response) => {
  const { username } = request.params;
  const cached = await cache.get(`player:${username}`);
  if (cached) {
    return response.json(JSON.parse(playerString));
  }

  return response.json({ message: "username not found" });
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
