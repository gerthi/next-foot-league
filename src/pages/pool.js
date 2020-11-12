import PlayerPool from "../components/PlayerPool/PlayerPool";
import { useGetPlayers } from "../hooks/useRequest";
import { playersJson } from "../constants/players";

export default function Pool() {
  const players = playersJson;
  // const { players, error } = useGetPlayers("/players");
  // if (!players) return <h1>Loading...</h1>;
  // if (error) {
  //   return <h1>Something went wrong!</h1>;
  // }

  return <PlayerPool players={players} />;
}
