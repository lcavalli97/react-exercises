import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((prevState) => !prevState);
  }

  return (
    <div
      className="app"
      style={{ backgroundColor: "white", border: "1px solid red" }}
    >
      <div className="app-title">
        {title}
        <button onClick={handleToggleCollapse}>Toggle</button>
      </div>
      {!collapsed && <div className="app-content">{children}</div>}
    </div>
  );
}
