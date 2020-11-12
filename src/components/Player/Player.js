import styles from "./Player.module.scss";

export default function Player({ player }) {
  return (
    <>
      <div className={styles.player}>
        <div className={styles.player_name}>{player.name}</div>
        <div className={styles.player_club}>{player.team}</div>
        <div className={styles.player_position}>
          {player.position.slice(0, 3).toUpperCase()}
        </div>
        <div className={styles.player_goals}>{player.goals.total}</div>
        <div className={styles.player_assists}>{player.goals.assists}</div>
        <div className={styles.player_saves}>
          {player.saves ? player.saves : "0"}
        </div>
        <div className={styles.player_interceptions}>
          {player.tackles.interceptions}
        </div>
        <div className={styles.player_lostBalls}>
          {player.passes.total * (1 - player.passes.accuracy)}
        </div>
        <div className={styles.player_fouls}>{player.fouls.committed}</div>
        <div className={styles.player_wonDuels}>
          {player.duels.won
            ? Math.floor((player.duels.won / player.duels.total) * 100) + "%"
            : "0%"}
        </div>
        <div className={styles.player_passAcc}>{player.passes.accuracy}</div>
        <div className={styles.player_shotAcc}>
          {player.shots.on
            ? Math.floor((player.shots.on / player.shots.total) * 100) + "%"
            : "0%"}
        </div>
      </div>
    </>
  );
}
