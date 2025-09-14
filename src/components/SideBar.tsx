import React from "react";
import '../styles/SideBar.css'
import homeicon from '../assets/icons/home.svg';
import folder from '../assets/icons/folder.svg';
import about from '../assets/icons/about.svg';
import teamfolder from '../assets/team-folder.png'

import TitleBar from "./TitleBar";

import { useState } from "react";

interface SideBarProps {
    onNavigate: (section: string) => void;
}

function SideBar({ onNavigate }: SideBarProps) {
    return(
        <div className="sidebar">
            <TitleBar />
            
            <button 
                className="navigation-button"
                onClick={() => onNavigate('home')}
            >
                <img src={homeicon} className=""/>
                <span className="button-text">Home</span>
            </button>
            
            <button 
                className="navigation-folder"
                onClick={() => onNavigate('team')}
            >
                <img width="20px" height="20px" src="https://img.icons8.com/ios-filled/50/228BE6/conference-background-selected.png" className=""/>
                <span className="button-text">Team Members</span>
            </button>
            
            <button 
                className="navigation-folder"
                onClick={() => onNavigate('events')}
            >
                <img width="20px" height="20px" src="https://img.icons8.com/sf-regular/48/228BE6/today.png" className=""/>
                <span className="button-text">Events</span>
            </button>
            <button 
                className="navigation-button"
                onClick={() => onNavigate('contact')}
            >
                <img width="20" height="20" src="https://img.icons8.com/windows/50/228BE6/phone-disconnected--v1.png"/>
                <span className="button-text">Contact</span>
            </button>
        </div>
    )
}


export default SideBar;