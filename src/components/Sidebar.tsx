import React, { useState } from "react";
import {
  CheckSquare,
  Search,
  Plus,
  Filter,
  Clock,
  PlayCircle,
  CheckCircle,
  Flag,
  Archive,
  Settings,
  User,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  EyeIcon,
  CodeSquare,
  BarChart,
  LineChart,
  File,
  Star,
} from "lucide-react";

interface SidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
  theme: "light" | "dark";
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, onToggle, theme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeItem, setActiveItem] = useState("tasks");
  const [expandedSections, setExpandedSections] = useState({
    dueToday: false,
    inProgress: false,
    completed: false,
    priority: false,
    executiveSummary: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const collapsedTaskIcons =
    activeItem === "tasks"
      ? [
          { icon: Search, label: "Search" },
          { icon: Plus, label: "New task" },
          { icon: Filter, label: "Filter" },
          { icon: Clock, label: "Due today" },
          { icon: PlayCircle, label: "In progress" },
          { icon: CheckCircle, label: "Completed" },
          { icon: Flag, label: "Priority" },
          { icon: Archive, label: "Archived" },
        ]
      : [
          { icon: Search, label: "Search" },
          { icon: EyeIcon, label: "Eye" },
          { icon: CodeSquare, label: "Code" },
          { icon: LineChart, label: "Line" },
          { icon: BarChart, label: "Bar" },
          { icon: File, label: "File" },
          { icon: Star, label: "Star" },
          { icon: EyeIcon, label: "Eye" },
          { icon: LineChart, label: "Line" },
          { icon: BarChart, label: "Bar" },
        ];

  const handleNavItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  const navItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "tasks", icon: CheckSquare, label: "Tasks" },
  ];

  const renderContent = () => {
    switch (activeItem) {
      case "tasks":
        return (
          <>
            {/* Header with collapse button */}
            <div className="panel-header">
              <h2 className={`panel-title ${theme}`}>Tasks</h2>
              <button className={`collapse-button ${theme}`} onClick={onToggle}>
                <ChevronLeft size={20} />
              </button>
            </div>

            {/* Search */}
            <div className="search-section">
              <div className={`search-input ${theme}`}>
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`${theme}`}
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="section">
              <h3 className="section-title">Quick Actions</h3>
              <div className={`action-item ${theme}`}>
                <Plus size={16} />
                <span>New task</span>
              </div>
              <div className={`action-item ${theme}`}>
                <Filter size={16} />
                <span>Filter tasks</span>
              </div>
            </div>

            {/* My Tasks */}
            <div className="section">
              <h3 className="section-title">My Tasks</h3>

              <div className={`collapsible-item ${theme}`}>
                <div
                  className={`collapsible-header ${theme}`}
                  onClick={() => toggleSection("dueToday")}
                >
                  <div className="item-content">
                    <Clock size={16} />
                    <span>Due today</span>
                  </div>
                  {expandedSections.dueToday ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>
                {expandedSections.dueToday && (
                  <div className="collapsible-content">
                    <div className={`sub-item ${theme}`}>
                      Review design mockups
                    </div>
                    <div className={`sub-item ${theme}`}>
                      Update documentation
                    </div>
                    <div className={`sub-item ${theme}`}>Test new feature</div>
                  </div>
                )}
              </div>

              <div className={`collapsible-item ${theme}`}>
                <div
                  className={`collapsible-header ${theme}`}
                  onClick={() => toggleSection("inProgress")}
                >
                  <div className="item-content">
                    <PlayCircle size={16} />
                    <span>In progress</span>
                  </div>
                  {expandedSections.inProgress ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>
                {expandedSections.inProgress && (
                  <div className="collapsible-content">
                    <div className={`sub-item ${theme}`}>
                      Implement user auth
                    </div>
                    <div className={`sub-item ${theme}`}>
                      Database migration
                    </div>
                  </div>
                )}
              </div>

              <div className={`collapsible-item ${theme}`}>
                <div
                  className={`collapsible-header ${theme}`}
                  onClick={() => toggleSection("completed")}
                >
                  <div className="item-content">
                    <CheckCircle size={16} />
                    <span>Completed</span>
                  </div>
                  {expandedSections.completed ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>
                {expandedSections.completed && (
                  <div className="collapsible-content">
                    <div className={`sub-item ${theme}`}>Fixed login bug</div>
                    <div className={`sub-item ${theme}`}>
                      Updated dependencies
                    </div>
                    <div className={`sub-item ${theme}`}>
                      Code review completed
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Other */}
            <div className="section">
              <h3 className="section-title">Other</h3>

              <div className={`collapsible-item ${theme}`}>
                <div
                  className={`collapsible-header ${theme}`}
                  onClick={() => toggleSection("priority")}
                >
                  <div className="item-content">
                    <Flag size={16} />
                    <span>Priority tasks</span>
                  </div>
                  {expandedSections.priority ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>
                {expandedSections.priority && (
                  <div className="collapsible-content">
                    <div className={`sub-item ${theme}`}>Critical bug fix</div>
                    <div className={`sub-item ${theme}`}>
                      Client presentation
                    </div>
                  </div>
                )}
              </div>

              <div className={`simple-item ${theme}`}>
                <Archive size={16} />
                <span>Archived</span>
              </div>
            </div>
          </>
        );
      case "dashboard":
        return (
          <>
            {/* Header */}
            <div className="panel-header">
              <h2 className={`panel-title ${theme}`}>Dashboard</h2>
              <button className={`collapse-button ${theme}`} onClick={onToggle}>
                <ChevronLeft size={20} />
              </button>
            </div>

            {/* Search */}
            <div className="search-section">
              <div className={`search-input ${theme}`}>
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`${theme}`}
                />
              </div>
            </div>

            {/* Dashboard Types */}
            <div className="section">
              <h3 className="section-title">Dashboard Types</h3>

              <div className={`simple-item ${theme}`}>
                <EyeIcon size={16} />
                <span>Overview</span>
              </div>

              {/* Executive Summary with subitems */}
              <div className={`collapsible-item ${theme}`}>
                <div
                  className={`collapsible-header ${theme}`}
                  onClick={() => toggleSection("executiveSummary")}
                >
                  <div className="item-content">
                    <CodeSquare size={16} />
                    <span>Executive Summary</span>
                  </div>
                  {expandedSections.executiveSummary ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>
                {expandedSections.executiveSummary && (
                  <div className="collapsible-content">
                    <div className={`sub-item ${theme}`}>Revenue Overview</div>
                    <div className={`sub-item ${theme}`}>
                      Key Performance Indicators
                    </div>
                    <div className={`sub-item ${theme}`}>
                      Strategic Goals Progress
                    </div>
                    <div className={`sub-item ${theme}`}>
                      Department Highlights
                    </div>
                  </div>
                )}
              </div>

              <div className={`simple-item ${theme}`}>
                <BarChart size={16} />
                <span>Operations Dashboard</span>
              </div>

              <div className={`simple-item ${theme}`}>
                <LineChart size={16} />
                <span>Financial Dashboard</span>
              </div>
            </div>

            {/* Report Summaries */}
            <div className="section">
              <h3 className="section-title">Report Summaries</h3>

              <div className={`simple-item ${theme}`}>
                <File size={16} />
                <span>Weekly Reports</span>
              </div>
              <div className={`simple-item ${theme}`}>
                <Star size={16} />
                <span>Monthly Insights</span>
              </div>
              <div className={`simple-item ${theme}`}>
                <EyeIcon size={16} />
                <span>Quarterly Analysis</span>
              </div>
            </div>

            {/* Business Intelligence */}
            <div className="section">
              <h3 className="section-title">Business Intelligence</h3>

              <div className={`simple-item ${theme}`}>
                <BarChart size={16} />
                <span>Performance Metrics</span>
              </div>
              <div className={`simple-item ${theme}`}>
                <LineChart size={16} />
                <span>Predictive Analytics</span>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="panel-header">
              <h2 className={`panel-title ${theme}`}>
                {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}
              </h2>
              <button className="collapse-button" onClick={onToggle}>
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="section">
              <div className={`simple-item ${theme}`}>
                <span>Feature coming soon...</span>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="sidebar-container">
      {/* Left Panel - Always Visible Icons */}
      <div className={`left-panel ${theme}`}>
        <div className="nav-section">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${theme} ${
                activeItem === item.id ? "active" : ""
              }`}
              title={item.label}
              onClick={() => handleNavItemClick(item.id)}
            >
              <item.icon size={20} />
            </div>
          ))}
        </div>

        <div className="bottom-section">
          <div className={`nav-item ${theme}`} title="Settings">
            <Settings size={20} />
          </div>
          <div className={`nav-item ${theme}`} title="Profile">
            <User size={20} />
          </div>
        </div>
      </div>

      {/* Right Panel - Content Panel */}
      <div
        className={`right-panel ${theme} ${
          isExpanded && activeItem ? "expanded" : "collapsed"
        }`}
      >
        {!isExpanded && activeItem && (
          <div className="collapsed-icons flex flex-col items-center py-4 gap-4">
            {/* Expand button at bottom */}
            <button
              className={`collapse-button ${theme} chevron-right`}
              onClick={onToggle}
            >
              <ChevronRight size={20} />
            </button>
            {collapsedTaskIcons.map((it, idx) => (
              <div key={idx} className={`nav-item ${theme}`} title={it.label}>
                <it.icon size={20} />
              </div>
            ))}
          </div>
        )}
        {isExpanded && activeItem && (
          <div className="right-panel-content">{renderContent()}</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
