import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = "/api";

export const useGetPlayers = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;
  const { data: players, error } = useSWR(url, fetcher);

  return { players, error };
};
