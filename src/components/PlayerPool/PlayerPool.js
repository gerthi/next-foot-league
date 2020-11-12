import Player from "../Player/Player";
import styles from "./PlayerPool.module.scss";

export default function PlayerPool({ players, error }) {
  if (error) return <h1>Something went wrong!</h1>;
  if (!players) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Player Pool</h1>
      <p>Found {players.length} players</p>
      <div className={styles.pool_container}>
        <div className={styles.pool_header}>
          <h3 className={styles.name}>Name</h3>
          <h3 className={styles.club}>Club</h3>
          <h3 className={styles.position}>Position</h3>
          <h3 className={styles.goals}>Goals</h3>
          <h3 className={styles.assists}>Assists</h3>
          <h3 className={styles.saves}>Saves</h3>
          <h3 className={styles.interceptions}>Interceptions</h3>
          <h3 className={styles.lostBalls}>Balls lost</h3>
          <h3 className={styles.fouls}>Fouls</h3>
          <h3 className={styles.wonDuels}>Duels won</h3>
          <h3 className={styles.passAcc}>Pass %</h3>
          <h3 className={styles.shotAcc}>Shots %</h3>
        </div>

        <div className={styles.pool_players}>
          {players.map((player) => (
            <div className={styles.player}>
              <Player player={player} key={player.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
