import React from "react";
import '../styles/Achievements.css';
import Squares from "../backgrounds/Squares";

// Replace with actual teacher images
import teacher1 from "../assets/teachers-images/Gitanjali Mam.jpeg";
import teacher2 from "../assets/teachers-images/HOD.jpg";
import teacher3 from "../assets/teachers-images/Principal Sir.jpg";

function Achievements() {
    return (
        <div className="achievement-area">
            <Squares 
                speed={0.5} 
                squareSize={40}
                direction="diagonal"
                borderColor="#3d244dff"
                hoverFillColor="#4A4A4A"
            />

            <div className="teachers-container">
                {/* Teacher 1 */}
                <div className="teacher-card">
                    <img src={teacher1} alt="Teacher 1" className="teacher-img" />
                    <div className="teacher-info">
                        <h3>Dr. A. Sharma</h3>
                        <p>Head of Department</p>
                    </div>
                </div>

                {/* Teacher 2 */}
                <div className="teacher-card">
                    <img src={teacher2} alt="Teacher 2" className="teacher-img" />
                    <div className="teacher-info">
                        <h3>Prof. R. Desai</h3>
                        <p>Assistant Professor</p>
                    </div>
                </div>

                {/* Teacher 3 */}
                <div className="teacher-card">
                    <img src={teacher3} alt="Teacher 3" className="teacher-img" />
                    <div className="teacher-info">
                        <h3>Ms. K. Patil</h3>
                        <p>Faculty Mentor</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;
