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
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-container"
                >
                    <h1 className="title-text">
                        Welcome To AISAC
                    </h1>
                    <p className="body-text">
                        The Artificial Intelligence Students Association Committee (AISAC) is a
                        vibrant student community dedicated to advancing AI knowledge, fostering
                        creativity, and inspiring innovation. Our teams work together across
                        research, development, and outreach to create an impact in the field of AI.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default ContentArea;