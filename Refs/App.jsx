import { Counter } from "./Counter";

export function App() {
  function handleLogin(data) {
    console.log(data);
  }

  return (
    <div>
      <Counter />
    </div>
  );
}
