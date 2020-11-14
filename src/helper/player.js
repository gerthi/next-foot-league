const teamParser = (team) => {
  if (team === "Stade Brestois 29") {
    return "Brest";
  }
  if (team === "Paris Saint Germain") {
    return "PSG";
  } else return team;
};

function cleanPlayer(player) {
  const cleanedPlayer = {
    id: player.id,
    name: player.name,
    club: teamParser(player.team),
    position: player.position.slice(0, 3).toUpperCase(),
    minutes:
      player.games.minutes_played > 0
        ? Math.floor(player.games.minutes_played / player.games.appearences)
        : 0,
    goals: player.goals.total,
    assists: player.goals.assists,
    keys: player.passes.key,
    saves: player.saves ? player.saves : "0",
    interceptions: player.tackles.interceptions,
    fouls: player.fouls.committed,
    duels: player.duels.won
      ? Math.floor((player.duels.won / player.duels.total) * 100)
      : 0,
    pAcc: player.passes.accuracy,
    sAcc: player.shots.on
      ? Math.floor((player.shots.on / player.shots.total) * 100)
      : 0,
  };
  return cleanedPlayer;
}

export function cleanPlayerList(players) {
  const cleanedPlayers = [];
  players.forEach((player) => {
    cleanedPlayers.push(cleanPlayer(player));
  });

  return cleanedPlayers;
}
