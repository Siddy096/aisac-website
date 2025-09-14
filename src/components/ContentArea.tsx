import React from "react";
import '../styles/ContentArea.css'
import { motion } from 'framer-motion'
// import Orb from '../backgrounds/Orb'
import DecryptedText from "../text-animations/DecryptedText";
// import Prism from "../backgrounds/Prism";
import Silk from "../backgrounds/Silk";
import SplitText from "../text-animations/SplitText";

import teacher1 from "../assets/teachers-images/Gitanjali Mam.jpg";
import teacher2 from "../assets/teachers-images/HOD.jpg";
import teacher3 from "../assets/teachers-images/Principal Sir.jpg";

function ContentArea() {
    return (
        <div className="content-area">
            {/* Fixed Background - Constrained to content area */}
            <div style={{ 
                width: '100%', 
                height: '100%', 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                zIndex: 1 
            }}>
                <Silk
                    speed={5}
                    scale={1}
                    color="#527fab"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            
            {/* Scrollable Content */}
            <motion.div className="text-container">
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
                </p>
            </motion.div>
            
            {/* Our Mentors text - no animation */}
            <h2 className="mentors-text">Our Mentors</h2>
            
            
            {/* Teachers Container - Below the text */}
            <div className="teachers-container">
                {/* Teacher 1 */}
                <div className="teacher-card">
                    <img src={teacher1} alt="Teacher 1" className="teacher-image" />
                    <div className="teacher-info">
                        <h3>Prof. Gitanjali Korgaonkar</h3>
                        <p>Staff Co-Ordinator</p>
                    </div>
                </div>

                {/* Teacher 2 */}
                <div className="teacher-card">
                    <img src={teacher2} alt="Teacher 2" className="teacher-image" />
                    <div className="teacher-info">
                        <h3>Dr. Mahavir Devmane</h3>
                        <p>Head Of Department</p>
                    </div>
                </div>

                {/* Teacher 3 */}
                <div className="teacher-card">
                    <img src={teacher3} alt="Teacher 3" className="teacher-image" />
                    <div className="teacher-info">
                        <h3>Dr. Alam Shaikh</h3>
                        <p>Principal</p>
                    </div>
                </div>
            </div>
            
            {/* Vision & Mission Section */}
            <div className="vision-mission-container">
                <h2 className="mentors-text">Vision and Mission</h2>
                <div className="vision-card">
                    <h2>Our Vision</h2>
                    <p>
                    To Nurture innovative minds for academic excellence
                    with emphasis on in-dept technical knowledge for
                    creating a value-based sustainable society.
                    </p>
                </div>

                <div className="mission-card">
                    <h2>Our Mission</h2>
                    <p>To develop an ecosystem of academic excellence through the best possible teaching-learning methodology.</p>
                    <p>To develop practically trained skilled professionals to meet the demands of society and the corporate World.</p>
                    <p>To groom professionals with high ethical values and the ability to solve real-life problems.</p>
                </div>
            </div>
        </div>
    )
}

export default ContentArea;