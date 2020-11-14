import { useState } from "react";
import Player from "../Player/Player";
import styles from "./PlayerPool.module.scss";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";

const orderBy = (players, value, direction) => {
  if (direction === "asc") {
    return [...players].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }
  if (direction === "desc") {
    return [...players].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }
  return players;
};

const SortArrows = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color='inherit' />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color='inherit' />
      </div>
    );
  }
};

export default function PlayerPool({ players }) {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedPlayers = orderBy(players, value, direction);

  const switchDirection = () => {
    if (!direction || direction === "asc") {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <>
      <h1>Player Pool</h1>
      <p>Found {players.length} players</p>
      <div className={styles.pool_container}>
        <div className={styles.pool_header}>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("name")}
          >
            <span className={styles.name}>Name</span>
            {value === "name" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("club")}
          >
            <span className={styles.club}>Club</span>
            {value === "club" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("position")}
          >
            <span className={styles.position}>Position</span>
            {value === "position" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("minutes")}
          >
            <span className={styles.minutes}>Min/g</span>
            {value === "minutes" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("goals")}
          >
            <span className={styles.goals}>Goals</span>
            {value === "goals" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("assists")}
          >
            <span className={styles.assists}>Assists</span>
            {value === "assists" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("keys")}
          >
            <span className={styles.assists}>Key pass</span>
            {value === "keys" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("saves")}
          >
            <span className={styles.saves}>Saves</span>
            {value === "saves" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("interceptions")}
          >
            <span className={styles.interceptions}>Interceptions</span>
            {value === "interceptions" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("fouls")}
          >
            <span className={styles.fouls}>Fouls</span>
            {value === "fouls" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("duels")}
          >
            <span className={styles.wonDuels}>Duels won</span>
            {value === "duels" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("pAcc")}
          >
            <span className={styles.passAcc}>Pass %</span>
            {value === "pAcc" && <SortArrows direction={direction} />}
          </button>
          <button
            className={styles.header_button}
            onClick={() => setValueAndDirection("sAcc")}
          >
            <span className={styles.shotAcc}>Shots %</span>
            {value === "sAcc" && <SortArrows direction={direction} />}
          </button>
        </div>
        <div className={styles.pool_players}>
          {orderedPlayers.length > 0
            ? orderedPlayers.map((player) => (
                <div className={styles.player} key={player.id}>
                  <Player player={player} key={player.id} />
                </div>
              ))
            : "loading..."}
        </div>
      </div>
    </>
  );
}
