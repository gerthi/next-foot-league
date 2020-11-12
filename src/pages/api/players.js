import db from "../../lib/firebase";

export default async function (req, res) {
  const playersData = await db.collection("players").get();
  const players = {};
  playersData.forEach((player) => (players[player.id] = player.data()));

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(players));
}
