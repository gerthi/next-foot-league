import styles from "./Player.module.scss";

export default function Player({ player }) {
  return (
    <>
      <div className={styles.player}>
        <div className={styles.player_name}>{player.name}</div>
        <div className={styles.player_club}>{player.club}</div>
        <div className={styles.player_position}>{player.position}</div>
        <div className={styles.player_minutes}>{player.minutes}</div>
        <div className={styles.player_goals}>{player.goals}</div>
        <div className={styles.player_assists}>{player.assists}</div>
        <div className={styles.player_assists}>{player.keys}</div>
        <div className={styles.player_saves}>{player.saves}</div>
        <div className={styles.player_interceptions}>
          {player.interceptions}
        </div>
        <div className={styles.player_fouls}>{player.fouls}</div>
        <div className={styles.player_wonDuels}>{player.duels}%</div>
        <div className={styles.player_passAcc}>{player.pAcc}%</div>
        <div className={styles.player_shotAcc}>{player.sAcc}%</div>
      </div>
    </>
  );
}
