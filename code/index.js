const express = require("express");
const cache = require("./clients/Cache");
const chessService = require("./services/chess");

const app = express();
const PORT = 3000;

app.get("/status", (request, response) => {
  return response.status(200).json({ status: "online" });
});

app.get("/username/:username", async (request, response) => {
  const { username } = request.params;
  const playerCached = await cache.get(`player:${username}`);
  if (playerCached) {
    return response.status(200).json(JSON.parse(playerCached));
  }

  const player = await chessService.getPlayer(username);
  if (player) {
    await cache.set(`player:${username}`, player);
    return response.status(200).json(player);
  }

  return response.status(404).json({ message: "username not found" });
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
