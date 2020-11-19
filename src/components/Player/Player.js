import styles from "./Player.module.scss";
import TableCell from "@material-ui/core/TableCell";

export default function Player({ player }) {
  return (
    <>
      <TableCell component='th' scope='row'>
        {player.name}
      </TableCell>
      <TableCell align='left'>{player.club}</TableCell>
      <TableCell align='left'>{player.position}</TableCell>
      <TableCell align='right'>{player.games}</TableCell>
      <TableCell align='right'>{player.minutes}</TableCell>
      <TableCell align='right'>{player.goals}</TableCell>
      <TableCell align='right'>{player.assists}</TableCell>
      <TableCell align='right'>{player.keys}</TableCell>
      <TableCell align='right'>{player.saves}</TableCell>
      <TableCell align='right'>{player.interceptions}</TableCell>
      <TableCell align='right'>{player.fouls}</TableCell>
      <TableCell align='right'>{player.duels}%</TableCell>
      <TableCell align='right'>{player.pAcc}%</TableCell>
      <TableCell align='right'>{player.sAcc}%</TableCell>
    </>
  );
}
