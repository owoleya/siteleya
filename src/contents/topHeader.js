import React from 'react';
import { motion } from 'framer-motion';

const pathVariants = {
    hidden:{
        x:-100
    },
    visible:{
        x:0,
        transition:{
            duration:0.6,
            ease:"easeInOut",
        }
    }
}

const topHeader = () => {
    return(
        <motion.div initial="hidden" animate="visible" variants={pathVariants}>
            <p>home</p>
            <p>experience</p>
            <p>contact</p>
        </motion.div>
    )
}

export default topHeader;