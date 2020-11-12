import PlayerPool from "../components/PlayerPool/PlayerPool";
import { useGetPlayers } from "../hooks/useRequest";

export default function Pool() {
  const { players, error } = useGetPlayers("/players");
  if (error) return <h1>Something went wrong!</h1>;
  if (!players) return <h1>Loading...</h1>;

  return <PlayerPool players={players} error={error} />;
}
