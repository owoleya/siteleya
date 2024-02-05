import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedName from './components/animatedName';
import HomePageButton from './components/HomePageButton';
import './App.css';

import AnimatedPage from './components/animatePage';

const HomePage = () => {
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (shouldRedirect) {
      navigate('/main');
    }
  }, [shouldRedirect, navigate]);

  const containerVariants = {
    hidden: { opacity: 1 ,scale:0.8},
    visible: {
      opacity: 1,
      scale:1,
      transition: {
        duration: 1.3,
        ease: [0.4,0,0.2,1],
        staggerChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const exitVariants = {
    current: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -150 ,
      transition: {
        duration: 0.8,
        ease: [0.7,0,0.15,1],
        staggerChildren: 1,
      }},
  }
  const [exitAnimation, setExitAnimation] = useState(false);

  const handleButtonClick = () => {
    setExitAnimation(true);
    setTimeout(() => {setShouldRedirect(true);}, 700);
  };

  return (<AnimatedPage>
    <div className="App">
      <header className="App-header">
        <motion.div
        variants={exitVariants}
        initial="current"
        animate={exitAnimation ? "exit" : "current"}
        style={{ width: '50%', height: '50%' }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            
          >
            <motion.p
              className="homepage-header-text"
              variants={itemVariants}
              style={{ textAlign: 'left' }}
            >
              Hi, my name is
            </motion.p>
            <motion.div
              variants={logoVariants}
              style={{ width: '100%', height: '100%' }}
            >
              <AnimatedName />
            </motion.div>
            <motion.div
              variants={itemVariants}
              style={{ width: '100%', textAlign: 'right' }}
            >
              <p className="homepage-header-text" style={{ fontSize: '18px' }}>
                Software Engineer - Motion Design
              </p>
            </motion.div>
            <motion.div variants={itemVariants} style={{ height: '400%' }}>
              <HomePageButton onClick={handleButtonClick} />
            </motion.div>
          </motion.div>
        </motion.div>
      </header>
    </div>
    </AnimatedPage>
  );
};

export default HomePage;
