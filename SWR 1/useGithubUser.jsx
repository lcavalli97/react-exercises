import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
  );

  return {
    data,
    error,
    loading: !data && !error,
  };
}
