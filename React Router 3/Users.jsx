import { Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

export function Users() {
  return (
    <div>
      <Routes>
        <Route index element={<p>Add a user and select it</p>} />
        <Route path="list" element={<GithubUserList />} />
        <Route path=":username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
