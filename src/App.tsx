import React, { useState } from "react";

import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import ContentArea from "./components/ContentArea";
import TeamMembers from "./components/AisacMembers";
import Events from "./components/Events";
import Contact from "./components/Contact";

import "./App.css";
import { Element } from "react-scroll";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Navigation history
  const [history, setHistory] = useState<string[]>(["home"]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // When navigating via sidebar
  const handleNavigation = (section: string) => {
    if (section === activeSection) return; // no duplicate entries

    const newHistory = history.slice(0, historyIndex + 1); // cut off forward history
    newHistory.push(section);

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setActiveSection(section);
  };

  // ✅ Back navigation
  const handleBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setActiveSection(history[newIndex]);
    }
  };

  // ✅ Forward navigation
  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setActiveSection(history[newIndex]);
    }
  };

  const renderActiveContent = () => {
    switch (activeSection) {
      case "home":
        return <ContentArea />;
      case "team":
        return <TeamMembers />;
      case "events":
        return <Events />;
      case "contact":
        return <Contact />;
      default:
        return <ContentArea />;
    }
  };

  return (
    <div className="app">
      <div className="main-content">
        <div className="sidebar">
          {/* Pass the navigation handler to SideBar */}
          <SideBar onNavigate={handleNavigation} />
        </div>
        <div className="content-wrapper">
          <div className="navbar">
            <NavBar
              activeSection={activeSection}
              onBack={handleBack}
              onForward={handleForward}
              canGoBack={historyIndex > 0}
              canGoForward={historyIndex < history.length - 1}
            />
          </div>
          <Element name="main-content">
            <div className="content-area">{renderActiveContent()}</div>
          </Element>
        </div>
      </div>
    </div>
  );
}
export default App;
