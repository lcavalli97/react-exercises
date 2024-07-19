import { Link, Outlet } from "react-router-dom";
import { useGithubUsers } from "./useGithubUsers";

export function GithubUsers() {
  const { users, error, isLoading, onRefresh } = useGithubUsers();

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {isLoading && <h3>Loading data...</h3>}
      {error && <h3>An error has occurred.</h3>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
}
