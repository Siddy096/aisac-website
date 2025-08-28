import '../styles/TitleBar.css'
import React from 'react';

function TitleBar() {
  return (
      <nav className="titlebar">
        <button className="close-window-button">
          <span className='icon close-icon'></span>
        </button>
        <button className="maximize-window-button">
          <span className='icon minimize-icon'></span>
        </button>
        <button className="minimize-window-button">
          <span className='icon maximize-icon'></span>
        </button>
      </nav>
  );
}

export default TitleBar;
