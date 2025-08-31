import React from "react";
import '../styles/SideBar.css'
import homeicon from '../assets/icons/home.svg';
import folder from '../assets/icons/folder.svg';
import about from '../assets/icons/about.svg';
import TitleBar from "./TitleBar";

function SideBar(){
    return(
        <div className="sidebar">
            <TitleBar />
                <button className="navigation-button">
                    <img src= { homeicon } className=""/>
                    <span className="button-text">
                        Home
                    </span>
                </button>
                <button className="navigation-folder">
                    <img width="20px" height="20px" src = "https://img.icons8.com/ios-filled/50/228BE6/conference-background-selected.png" className=""/>
                    <span className="button-text">
                        Team Members                   
                    </span>
                </button>
                <button className="navigation-folder">
                    <img width="20px" height="20px" src = "https://img.icons8.com/sf-regular/48/228BE6/today.png" className=""/>
                    <span className="button-text">
                        Events
                    </span>
                </button>
                <button className="navigation-button">
                    <img src = { about } className=""/>
                    <span className="button-text">
                        About
                    </span>
                </button>
                <button className="navigation-button">
                    <img width="20" height="20" src = "https://img.icons8.com/windows/50/228BE6/phone-disconnected--v1.png"></img>
                    <span className="button-text">
                        Contact
                    </span>
                </button>
        </div>
    )
}

export default SideBar;