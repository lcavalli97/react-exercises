import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <Routes>
      <Route path="/users/:username" element={<ShowGithubUser />} />
    </Routes>
  );
}
