import React from "react";
import '../styles/Achievements.css';
import Squares from "../backgrounds/Squares";
import Silk from '../backgrounds/Silk'

// Replace with actual teacher images
import teacher1 from "../assets/teachers-images/Gitanjali Mam.jpg";
import teacher2 from "../assets/teachers-images/HOD.jpg";
import teacher3 from "../assets/teachers-images/Principal Sir.jpg";

function Achievements() {
    return (
        <div className="achievement-area">
            {/* <Squares 
                speed={0.5} 
                squareSize={40}
                direction="diagonal"
                borderColor="#3d244dff"
                hoverFillColor="#4A4A4A"
            /> */}
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <Silk
                    speed={5}
                    scale={1}
                    color="#527fab"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
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
        </div>
    );
}

export default Achievements;
