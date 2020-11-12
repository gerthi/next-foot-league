import { useState } from "react";
import Player from "../Player/Player";
import styles from "./PlayerPool.module.scss";

const orderBy = (players, value, direction) => {
  if (direction === "asc") {
    return [...players].sort((a, b) => (a.value - b.value ? 1 : -1));
  }
  if (direction === "desc") {
    return [...players].sort((a, b) => (a.value - b.value ? -1 : 1));
  }
  return players;
};

export default function PlayerPool({ players }) {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  const orderedPlayers = orderBy(players, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    console.log("value is", value);
    console.log("direction is", direction);
    switchDirection();
    setValue(value);
  };

  return (
    <>
      <h1>Player Pool</h1>
      <p>Found {players.length} players</p>
      <div className={styles.pool_container}>
        <div className={styles.pool_header}>
          <h3
            className={styles.name}
            onClick={() => setValueAndDirection("name")}
          >
            Name
          </h3>
          <h3 className={styles.club}>Club</h3>
          <h3 className={styles.position}>Position</h3>
          <h3 className={styles.minutes}>Min/g</h3>
          <h3
            className={styles.goals}
            onClick={() => setValueAndDirection("goals")}
          >
            Goals
          </h3>
          <h3 className={styles.assists}>Assists</h3>
          <h3 className={styles.assists}>Key pass</h3>
          <h3 className={styles.saves}>Saves</h3>
          <h3 className={styles.interceptions}>Interceptions</h3>
          <h3 className={styles.fouls}>Fouls</h3>
          <h3 className={styles.wonDuels}>Duels won</h3>
          <h3 className={styles.passAcc}>Pass %</h3>
          <h3 className={styles.shotAcc}>Shots %</h3>
        </div>

        <div className={styles.pool_players}>
          {orderedPlayers.length > 0
            ? players.map((player) => (
                <div className={styles.player}>
                  <Player player={player} key={player.id} />
                </div>
              ))
            : "loading..."}
        </div>
      </div>
    </>
  );
}
