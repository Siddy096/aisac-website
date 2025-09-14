import React from "react";
import '../styles/NavBar.css';

interface NavBarProps {
  activeSection: string;
}

function NavBar({ activeSection }: NavBarProps) {
  // Mapping sections to display names
  const sectionNames: Record<string, string> = {
    home: "Home",
    team: "Team Members",
    events: "Events",
    contact: "Contact",
  };

  return (
    <div className="navbar">
      <button className="navigate-arrow back">
        <span>‹</span>
      </button>
      <button className="navigate-arrow forward">
        <span>›</span>
      </button>
      <span className="current-folder">
        {"> "}{sectionNames[activeSection] || "Home"}
      </span>
    </div>
  );
}

export default NavBar;
