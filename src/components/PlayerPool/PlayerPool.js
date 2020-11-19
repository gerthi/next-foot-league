import { useState } from "react";
import Player from "../Player/Player";
import { CATEGORIES } from "../../constants/categories";
import styles from "./PlayerPool.module.scss";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

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

  const setDirectionLabel = () => {
    return direction === "desc" ? "asc" : "desc";
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <>
      <h1>Player Pool</h1>
      <p>Found {players.length} players</p>

      <TableContainer component={Paper} className={styles.table_container}>
        <Table
          className={styles.pool_container}
          size='small'
          stickyHeader
          aria-label='sticky table'
        >
          <TableHead>
            <TableRow>
              {CATEGORIES.map((category) => (
                <TableCell
                  onClick={() => setValueAndDirection(category.id)}
                  className={value === category.id ? styles.active : ""}
                  align={category.align}
                  key={category.id}
                >
                  <TableSortLabel direction={setDirectionLabel()}>
                    {category.title}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orderedPlayers.length > 0
              ? orderedPlayers.map((player) => (
                  <TableRow key={player.id}>
                    <Player player={player} />
                  </TableRow>
                ))
              : "loading..."}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
