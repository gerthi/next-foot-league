import PlayerPool from "../components/PlayerPool/PlayerPool";
import { cleanPlayerList } from "../helper/player";
// import { getPlayers } from "../hooks/useRequest";
// import { playersJson } from "../constants/players";

export default function Pool({ players }) {
  // const players = playersJson;
  if (!players) return <h1>Loading...</h1>;
  // if (error) {
  //   return <h1>Something went wrong!</h1>;
  // }

  return <PlayerPool players={cleanPlayerList(players)} />;
}

export async function getStaticProps() {
  // const { players, error } = useGetPlayers("/players");
  const response = await fetch("http://localhost:3000/api/players");
  const players = await response.json();

  return {
    props: {
      players,
    },
  };
}
