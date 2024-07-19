import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function Root() {
  return (
    <SWRConfig value={{fetcher}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  );
}
