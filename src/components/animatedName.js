import React from 'react';
import { motion } from 'framer-motion';


const pathVariants = {
    hidden:{
        opacity:0.3,
        pathLength:0
    },
    visible:{
        opacity:1,
        pathLength:1.2,
        transition:{
            duration:0.6,
            ease:"easeInOut",
            staggerChildren: 0.3
        }
    }
}

const animatedName = () => {
    // return (
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.72 56.77">
    //     <defs>
    //       <style>{`.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:8px;}`}</style>
    //     </defs>
    //     <title>Name</title>
    //     <g id="Layer_2" data-name="Layer 2">
    //       <path className="cls-1" d="M65.83,171.08V129.81H80a18.29,18.29,0,0,1,7.55,1.43,11,11,0,0,1,4.89,4.07A11.33,11.33,0,0,1,87.5,152,18.13,18.13,0,0,1,80,153.45H68" transform="translate(-61.83 -125.81)" />
    //       <path className="cls-1" d="M124.14,142.65l-10,28a15.1,15.1,0,0,1-2.78,4.78,8.77,8.77,0,0,1-3.44,2.4,11.87,11.87,0,0,1-4.18.7,12.73,12.73,0,0,1-3.82-.6,9.26,9.26,0,0,1-3.17-1.68m16.85-7.6-11.14-26" transform="translate(-61.83 -125.81)" />
    //       <path className="cls-1" d="M142.23,167.1a12.42,12.42,0,0,1-6-1.43,10.83,10.83,0,0,1,0-19.14,12.63,12.63,0,0,1,6-1.4,12.84,12.84,0,0,1,6.06,1.4,10.57,10.57,0,0,1,4.17,3.89,10.81,10.81,0,0,1-4.17,15.25A12.61,12.61,0,0,1,142.23,167.1Z" transform="translate(-61.83 -125.81)" />
    //       <path className="cls-1" d="M183.12,147.8H158.61m24.51,17.71a7.33,7.33,0,0,1-2.63,1.19,13.31,13.31,0,0,1-3.24.40,9.89,9.89,0,0,1-6.9-2.26q-2.47-2.26-2.47-6.74V129.81" transform="translate(-61.83 -125.81)" />
    //       <path className="cls-1" d="M192.13,144.7V171" transform="translate(-61.83 -125.81)" />
    //       <path className="cls-1" d="M192.8,154.75h0a15.44,15.44,0,0,1,14-4.62h0" transform="translate(-61.83 -125.81)" />
    //     </g>
    //   </svg>
    // );

    const styleContent = `
    .cls-1 {
      fill: none;
      stroke: #ffffff;
      stroke-miterlimit: 10;
      stroke-width: 8px;
    }
  `;

    return(
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 155.72 61.77" initial="hidden" animate="visible">
            <defs>
        {/* Use the dangerouslySetInnerHTML prop to inject the style content */}
        <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      </defs>
      <motion.g variants={pathVariants}>
                {/* <motion.path class="cls-1" d="M65.83,171.08V129.81H80a18.29,18.29,0,0,1,7.55,1.43,11,11,0,0,1,4.89,4.07A11.33,11.33,0,0,1,87.5,152,18.13,18.13,0,0,1,80,153.45H68" transform="translate(-61.83 -125.81)" variants={pathVariants}/>
                <motion.path class="cls-1" d="M124.14,142.65l-10,28a15.1,15.1,0,0,1-2.78,4.78,8.77,8.77,0,0,1-3.44,2.4,11.87,11.87,0,0,1-4.18.7,12.73,12.73,0,0,1-3.82-.6,9.26,9.26,0,0,1-3.17-1.68m16.85-7.6-11.14-26" transform="translate(-61.83 -125.81)" variants={pathVariants}/>
                <motion.path class="cls-1" d="M142.23,167.1a12.42,12.42,0,0,1-6-1.43,10.83,10.83,0,0,1,0-19.14,12.63,12.63,0,0,1,6-1.4,12.84,12.84,0,0,1,6.06,1.4,10.57,10.57,0,0,1,4.17,3.89,10.81,10.81,0,0,1-4.17,15.25A12.61,12.61,0,0,1,142.23,167.1Z" transform="translate(-61.83 -125.81)" variants={pathVariants}/>
                <motion.path class="cls-1" d="M183.12,147.8H158.61m24.51,17.71a7.33,7.33,0,0,1-2.63,1.19,13.31,13.31,0,0,1-3.24.4,9.89,9.89,0,0,1-6.9-2.26q-2.47-2.26-2.47-6.74V129.81" transform="translate(-61.83 -125.81)" variants={pathVariants}/>
                <motion.path class="cls-1" d="M192.13,144.7V171" transform="translate(-61.83 -125.81)" variants={pathVariants}/>
                <motion.path class="cls-1" d="M192.8,154.75h0a15.44,15.44,0,0,1,14-4.62h0" transform="translate(-61.83 -125.81)" variants={pathVariants}/> */}
                <motion.path class="cls-1" d="M65.826,171.076V129.815H79.949a18.364,18.364,0,0,1,7.551,1.421,11.074,11.074,0,0,1,4.894,4.079A11.32,11.32,0,0,1,87.5,152a18.114,18.114,0,0,1-7.551,1.444H67.989" transform="translate(-61.826 -125.815)" variants={pathVariants}/>
                <motion.path class="cls-1" d="M128.135,142.648l-9.987,28.057a15.362,15.362,0,0,1-2.773,4.777,8.872,8.872,0,0,1-3.449,2.4,11.939,11.939,0,0,1-4.172.7,12.583,12.583,0,0,1-3.822-.606,9.047,9.047,0,0,1-3.17-1.677m16.85-7.6-11.14-26.055" transform="translate(-62.826 -125.815)" variants={pathVariants}/>
                <motion.circle class="cls-1" cx="14.12" cy="14.12" r="11" transform="translate(72 16.6)" variants={pathVariants}/>
                <motion.path class="cls-1" d="M198.123,147.8H173.609m24.514,17.712a7.463,7.463,0,0,1-2.634,1.188,13.122,13.122,0,0,1-3.239.4,9.834,9.834,0,0,1-6.9-2.261q-2.472-2.26-2.471-6.735V129.815" transform="translate(-68.826 -125.815)" variants={pathVariants}/>
                <motion.path class="cls-1" d="M210.13,144.7v26.347" transform="translate(-69.826 -125.815)" variants={pathVariants}/>
                <motion.path class="cls-1" d="M210.8,154.751h0a15.432,15.432,0,0,1,14.031-4.619h0" transform="translate(-69.826 -125.815)" variants={pathVariants}/>
                </motion.g></motion.svg>
    )
}

export default animatedName;