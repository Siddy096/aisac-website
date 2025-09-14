import React from "react";
import '../styles/Contact.css'

import LiquidEther from "../backgrounds/LiquidEther";

import AISAC from '../assets/icons/AISAC-LOGO.jpg'

export default function Contact(){
    return(
        <div className="contact-container">
            <div className="background-container">
                <LiquidEther
                    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>
            
            {/* Add your contact content here */}
            <div className="contact-app">
      {/* Sidebar */}
      {/* Contact Details */}
      <div className="contact-details">
        <div className="contact-header">
          <img
            src={AISAC}
            alt="Profile"
            className="contact-avatar"
          />
          <h2>AISAC TEAM</h2>
        </div>

        <div className="contact-actions">
          <button>💬 Instagram</button>
          <button>📞 E-Mail</button>
        </div>

        <div className="contact-info">
          <p><span>mobile</span> +91 98981 53919</p>
          <p><span>email</span> </p>
          <p><span>address</span> Vasantdada Patil Educational Complex, Eastern Express Highway, Padmabhushan Vasantdada Patil Marg, Sion Mumbai 400022.</p>
        </div>

      </div>
    </div>
        </div>
    );
}