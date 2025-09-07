import React from "react";

interface MainContentProps {
  sidebarExpanded: boolean;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  sidebarExpanded,
  theme,
  onToggleTheme,
}) => {
  return (
    <div
      className={`main-content ${theme} ${
        sidebarExpanded ? "sidebar-expanded" : "sidebar-collapsed"
      }`}
    >
      {/* Theme toggle button inside MainContent */}
      <div className="theme-toggle">
        <button className={`theme-btn ${theme}`} onClick={onToggleTheme}>
          Switch to {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </button>
      </div>

      <div className="content-container">
        <div className="welcome-section">
          <h1 className="welcome-title">Welcome to Task Manager</h1>
          <p className="welcome-description">
            Your productivity dashboard is ready. Use the sidebar to navigate
            through your tasks and manage your workflow efficiently.
          </p>

          <div className="stats-grid">
            <div className={`stat-card ${theme}`}>
              <h3>12</h3>
              <p>Tasks Due Today</p>
            </div>
            <div className={`stat-card ${theme}`}>
              <h3>8</h3>
              <p>In Progress</p>
            </div>
            <div className={`stat-card ${theme}`}>
              <h3>24</h3>
              <p>Completed This Week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
