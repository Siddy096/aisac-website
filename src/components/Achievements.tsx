import React from "react";
import '../styles/Achievements.css';
import GridDistortion from "../backgrounds/GridDistortion";

import background from '../assets/background-gradient.jpg'
function Achievements(){
    return(
        <div className="achievement-area">
            <GridDistortion
                imageSrc={background}
                grid={10}
                mouse={0.5}
                strength={0.15}
                relaxation={0.9}
                className="custom-class"
            />
        </div>
    )
}

export default Achievements