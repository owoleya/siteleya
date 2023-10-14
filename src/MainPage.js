import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import NXTE from './image/Frame 3.png';
import ForgeLit from './image/Frame 2.png';



const MainPage = () => {

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition:{
      duration: 0.5,
      ease: "easeInOut",
}},
  };

  const buttonStyle = {
    fontSize: '2rem',
    padding: '5px',  // Added padding for clarity
    border: 'none',
    background: 'none',
    color: 'white',
    marginRight: '10px',  // Added margin-right for spacing
  };



  return (
    <header className="App-header">
    <motion.div>
      {/* About */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="about-container"
      >
        <motion.h2 variants={itemVariants} className="title">About me</motion.h2>
        <motion.p variants={itemVariants} className="context">Born in 2001 at Kuala Lumpur, Malaysia. My name is Pyotr Lye and I'm a student who fairly recently completed my Bachelors Degree in Software Engineering in UOWM KDU Glenmarie. With a focus on AI and front-end development, I plan to pursue a career in full stack development, UI/UX and software engineering related careers. With a passion in the tech industry, I wish to take part within the fast paced and progressive culture involved with an IT career especially in terms of involving new ideas in the latest technology. I also like to explore creative ventures as well during my tech ambitions such as progressive UI/UX ideas or promoting creative ideas utilizing the latest technology.</motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="about-container"
      >
        <motion.h2 variants={itemVariants} className="title">Experiences</motion.h2>
        <motion.p variants={itemVariants} className="context" style={{fontWeight:"700",fontSize:"20px"}}>AI Engineer Intern at G2G </motion.p>
        <motion.p variants={itemVariants} className="context">Partaken in an internship which mainly revolved around designing an eKYC system. Tasks involved data extraction whilst researching and making machine learning models  image processing related projects using modern AI solutions. </motion.p>
      </motion.div>

      {/* <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="about-container"
      >
        <motion.h2 variants={itemVariants} className="title">Projects</motion.h2>
        <motion.p variants={itemVariants} className="context" style={{fontWeight:"700",fontSize:"20px"}}>AI Engineer Intern at G2G </motion.p>
        <motion.p variants={itemVariants} className="context">Partaken in an internship which mainly revolved around designing an eKYC system. Tasks involved data extraction whilst researching and making machine learning models  image processing related projects using modern AI solutions. </motion.p>
      </motion.div> */}

<motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="about-container"
      >
        <motion.h2 variants={itemVariants} className="title">Projects</motion.h2>
        <motion.img src={NXTE} variants={itemVariants} style={{ width: '350px', height: '350px',marginRight:'15px' }}></motion.img>
        <motion.img src={ForgeLit} variants={itemVariants} style={{ width: '350px', height: '350px',marginRight:'15px' }}></motion.img>
        </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="about-container"
      >
        <motion.h2 variants={itemVariants} className="title">Links</motion.h2>
        <Button href="https://github.com/owoleya" variant="link" style={buttonStyle}>
        <i className="bi bi-github"></i>
      </Button>

      <Button href="https://www.behance.net/pyotrlye" variant="link" style={buttonStyle}>
        <i class="bi bi-behance"></i>
      </Button>

      <Button href="https://www.instagram.com/pyor.t/" variant="link" style={buttonStyle}>
      <i class="bi bi-instagram"></i>
      </Button>

      <Button href="mailto:pyotrlye@gmail.com" variant="link" style={buttonStyle}>
      <i class="bi bi-envelope-fill"></i>
      </Button>
      <div>
      <Button href="https://drive.google.com/file/d/1PPJRqsArNRf4NkDHhnE6Ut1DVE_1nuqz/" style={buttonStyle}>
      <p className="context" style={{marginTop: '15px',fontWeight:"100",fontSize:"16px"}}>Click here to view my Resume</p> 
      </Button>
      </div>
      </motion.div>
        <div className="about-container">
        <p className="context" style={{marginTop: '30px',fontWeight:"100",fontSize:"10px"}}>Written in React by Pyotr Lye, 2023. All rights reserved.</p> 
    </div>
    </motion.div>
    </header>
  );
}

export default MainPage;
