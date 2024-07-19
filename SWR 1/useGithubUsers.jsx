import useSWR from "swr";

export function useGithubUsers() {
  const { data, error, mutate } = useSWR(`https://api.github.com/users`);

  return {
    users: data,
    error,
    isLoading: !data && !error,
  };
}
