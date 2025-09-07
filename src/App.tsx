import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <Sidebar
        isExpanded={sidebarExpanded}
        onToggle={toggleSidebar}
        theme={theme}
      />
      <MainContent
        sidebarExpanded={sidebarExpanded}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </div>
  );
}

export default App;
