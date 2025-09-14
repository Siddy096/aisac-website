import React from "react";
import "../styles/NavBar.css";

interface NavBarProps {
  activeSection: string;
  onBack: () => void;
  onForward: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

function NavBar({ activeSection, onBack, onForward, canGoBack, canGoForward }: NavBarProps) {
  const sectionNames: Record<string, string> = {
    home: "Home",
    team: "Team",
    events: "Events",
    contact: "Contact",
  };

  return (
    <div className="navbar">
      <button
        className="navigate-arrow back"
        onClick={onBack}
        disabled={!canGoBack}
      >
        <span>‹</span>
      </button>
      <button
        className="navigate-arrow forward"
        onClick={onForward}
        disabled={!canGoForward}
      >
        <span>›</span>
      </button>
      <span className="current-folder">{"> "}{sectionNames[activeSection] || "Home"}</span>
    </div>
  );
}

export default NavBar;
