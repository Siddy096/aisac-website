import React from "react";
import '../styles/ContentArea.css'
import background from '../assets/background.jpg';
import { motion } from 'framer-motion'
import outer from '../assets/outer-ring.png'
// import Orb from '../backgrounds/Orb'
import DecryptedText from "../text-animations/DecryptedText";
// import Prism from "../backgrounds/Prism";
import Silk from "../backgrounds/Silk";
import SplitText from "../text-animations/SplitText";

function ContentArea() {
    return (
        <div className="content-area">
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                {/* <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                /> */}
                <Silk
                    speed={5}
                    scale={1}
                    color="#527fab"
                    noiseIntensity={1.5}
                    rotation={0}
                />
                <motion.div
                    className="text-container"
                >
                    <h1 className="title-text">
                        <SplitText
                            text="Welcome To AiSAC"
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 10 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                        />
                    </h1>
                    <p className="body-text">
                        <DecryptedText
                            text="The Artificial Intelligence Students Association Committee (AISAC) is a vibrant student community dedicated to advancing AI knowledge, fostering creativity, and inspiring innovation. Our teams work together across research, development, and outreach to create an impact in the field of AI."
                            speed={10}
                            animateOn="view"
                        />
                        {/* The Artificial Intelligence Students Association Committee (AISAC) is a
                        vibrant student community dedicated to advancing AI knowledge, fostering
                        creativity, and inspiring innovation. Our teams work together across
                        research, development, and outreach to create an impact in the field of AI. */}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default ContentArea;