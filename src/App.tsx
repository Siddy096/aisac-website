import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import ContentArea from "./components/ContentArea";
import Achievements from "./components/Achievements";
import './App.css'
import { Element } from 'react-scroll';

function App(){
  return(
    <div className="app">
        <div className="main-content">
          <div className="sidebar">
            <SideBar></SideBar>
          </div>
          <div className="content-wrapper">
            <div className="navbar">
              <NavBar></NavBar>
            </div>
            <Element name = "main-content">
            <div className="content-area"> 
                <ContentArea></ContentArea><br />
                <Achievements></Achievements>
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