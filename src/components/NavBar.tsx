import React from "react";
import '../styles/NavBar.css'
function NavBar() {
    return(
        <div className="navbar">
            <button className="navigate-arrow back">
                <span>‹</span>
            </button>
            <button className="navigate-arrow forward">
                <span>›</span>
            </button>
            <span className="current-folder">
                Current Folder
            </span>
        </div>
    )
}
export default NavBar;