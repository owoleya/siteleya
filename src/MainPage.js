import React, { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import ResumeOverlay from './components/resumeOverlay';
import Resume from './image/resumeFeb2024.png';
import Project from './components/projectComponent';

import ForgeryLIT from './image/forgerylit.png'
import NXTE from './image/nxte.png'
import Parvorbital from './image/parvorbital.png'
import Pre5 from './image/premade5.png'


const MainPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleOverlayClick = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration:1,
        staggerChildren: 0.7,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition:{
      duration: 0.6,
      ease: [0.5,0,0.05,1],
}},
  };

  const buttonStyle = {
    fontSize: '2rem',
    padding: '5px', 
    border: 'none',
    background: 'none',
    color: 'white',
    marginRight: '10px',
  };

  const isSmallScreen = window.innerWidth < 900;


  return (
    <header className="App-header">
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div style={{display: 'flex', flexWrap: 'wrap' }}>
      {/* About */}
      <motion.div
        variants={containerVariants}
        className="about-container"
        style={{ width: isSmallScreen ? '100%' : '40%' }}
      >
        <motion.h2 variants={itemVariants} className="title">About me</motion.h2>
        <motion.p variants={itemVariants} className="context">Born in 2001 at Kuala Lumpur, Malaysia. My name is Pyotr Lye and I'm a student who fairly recently completed my Bachelors Degree in Software Engineering in UOWM KDU Glenmarie. With a focus on AI and front-end development, I plan to pursue a career in full stack development, UI/UX and software engineering related careers. With a passion in the tech industry, I wish to take part within the fast paced and progressive culture involved with an IT career especially in terms of involving new ideas in the latest technology. I also like to explore creative ventures as well during my tech ambitions such as progressive UI/UX ideas or promoting creative ideas utilizing the latest technology.</motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="about-container"
        style={{ width: isSmallScreen ? '100%' : '40%' }}
      >
        <motion.h2 variants={itemVariants} className="title">Experiences</motion.h2>
        <motion.p variants={itemVariants} className="context" style={{fontWeight:"700",fontSize:"20px"}}>AI Engineer Intern at G2G </motion.p>
        <motion.p variants={itemVariants} className="context">Partaken in an internship which mainly revolved around designing an eKYC system. Tasks involved data extraction whilst researching and making machine learning models  image processing related projects using modern AI solutions. </motion.p>
      </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="about-container"
        
      >
        <motion.h2 variants={itemVariants} className="title">Projects</motion.h2>
          {/* <motion.img src={NXTE} variants={itemVariants} style={{ width: '350px', height: '350px',marginRight:'15px' }}></motion.img>
          <motion.img src={ForgeLit} variants={itemVariants} style={{ width: '350px', height: '350px',marginRight:'15px' }}></motion.img> */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
          <motion.div style={{marginRight:'15px', marginBottom:"15px"}}><Project
            imageUrl={ForgeryLIT}
            text1="ForgeryLIT"
            text2="A Python based forgery detection system development as part of my internship utilizing deep learning algorithms to examine any inconsistencies or forged areas in an image. It was used to findforged documents sent for an eKYC system."
          /></motion.div>
          <motion.div style={{marginRight:'15px', marginBottom:"15px"}}><Project
            imageUrl={NXTE}
            text1="NXTE"
            text2="My submission for my final year project as part of Bachelor's degree. A Python-Anvil based notebook application utilizing Tensorflow to read handwriting and parse them into text. Aside from that, it also included basic notebook content manipulation and a simple UI/UX."
          /></motion.div>
          <motion.div style={{marginRight:'15px', marginBottom:"15px"}}><Project
            imageUrl={Pre5}
            text1="PREMADE5"
            text2="A motion graphics and design branding project done for the team PREMADE5. Many of my UI/UX and design philosophies came from here."
          /></motion.div>
          <motion.div style={{marginRight:'15px', marginBottom:"15px"}}><Project
            imageUrl={Parvorbital}
            text1="parvorbital"
            text2="A fanmade motion graphics project based on the song 'parvorbital' on CHUNITHM by Frums."
          /></motion.div>
          </motion.div>
        </motion.div>

      <motion.div
        variants={containerVariants}
        className="about-container"
      >
        <motion.h2 variants={itemVariants} className="title">Links</motion.h2>
        <motion.div variants={itemVariants}>
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
      <Button onClick={handleOverlayClick} style={buttonStyle}>
      <div style={{  color:"#101010", fontWeight: '300', fontSize: '16px', padding: '10px' , borderRadius: '150px' , backgroundColor: '#ffffff' }}>
        View my resume
      </div>
      </Button>
      <AnimatePresence exitBeforeEnter={false}>
      {isOverlayVisible && (
        <ResumeOverlay
          imageUrl={Resume}
          handleClose={handleOverlayClick}
        />
      )}
      </AnimatePresence>
      </motion.div>
      </motion.div>
        <div className="about-container">
        <p className="context" style={{marginTop: '30px',fontWeight:"100",fontSize:"10px"}}>Written in React by Pyotr Lye, 2023. All rights reserved.</p> 
    </div>
    </motion.div>
    </header>
  );
}

export default MainPage;
