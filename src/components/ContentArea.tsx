import React from "react";
import '../styles/ContentArea.css'
import background from '../assets/background.jpg';
import { motion } from 'framer-motion'
import outer from '../assets/outer-ring.png'
import Orb from '../backgrounds/Orb'

function ContentArea() {
    return (
        <div className="content-area">
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                />
                <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    textAlign: "center",
                    zIndex: 2,
                }}
                >
                <h1 style={{ fontSize: "3rem", margin: 0 }}>This is AISAC</h1>
                <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
                    The Artificial Intelligence Students Association Committee (AISAC) is a
                    vibrant student community dedicated to advancing AI knowledge, fostering
                    creativity, and inspiring innovation. Our teams work together across
                    research, development, and outreach to create an impact in the field of AI.
                </p>
                </div>
            </div>
        </div>
    )
}

export default ContentArea;