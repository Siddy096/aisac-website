import React from "react";
import { useState } from "react";

import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import ContentArea from "./components/ContentArea";
import Achievements from "./components/Achievements";
import TeamMembers from "./components/TeamMembers";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";

import './App.css'
import { Element } from 'react-scroll';

function App(){

  const [activeSection, setActiveSection] = useState('home');
  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  const renderActiveContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <>
            <ContentArea />
            <Achievements />
          </>
        );
      case 'team':
        return <TeamMembers />;
      case 'events':
        return <Events />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <ContentArea />
            <Achievements />
          </>
        );
    }
  };

  return(
    <div className="app">
        <div className="main-content">
          <div className="sidebar">
            {/* Pass the navigation handler to SideBar */}
            <SideBar onNavigate={handleNavigation} />
          </div>
          <div className="content-wrapper">
            <div className="navbar">
              <NavBar />
            </div>
            <Element name="main-content">
              <div className="content-area"> 
                {/* Render content based on active section */}
                {renderActiveContent()}
              </div>
            </Element>
          </div>
        </div>
        <div className="address-bar">
            Address Bar
        </div>
    </div>
  );
}
export default App