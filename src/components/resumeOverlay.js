import React from 'react';
import { motion } from 'framer-motion';

const resumeOverlay = ({ imageUrl, handleClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 ,scale:1.1}}
      animate={{ opacity: 1 ,scale:1,transition: {
        duration:0.5,
        ease:[0.9,0,0.05,1]
      }}}
      exit={{ opacity: 0,
        transition: {
            duration:0.3
          } }}
      onClick={handleClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(10px)',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.img
        src={imageUrl}
        style={{ maxWidth: '95%', maxHeight: '95%'}}
      />
    </motion.div>
  );
};

export default resumeOverlay;
