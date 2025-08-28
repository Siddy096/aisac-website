import React from "react";
import '../styles/ContentArea.css'
import background from '../assets/background.jpg';
import { motion } from 'framer-motion'
import outer from '../assets/outer-ring.png'

function ContentArea() {
    return (
        <div className="content-area">
                <div className="rotating-image-container">
                <motion.img 
                    className="image" 
                    src={outer} 
                    width="300px" 
                    height="300px" 
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 5, 
                        repeatType: "loop",
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
        </div>
    )
}

export default ContentArea;