import React, { useRef, useState } from 'react';


const Project = ({ imageUrl, text1, text2 }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
    height: '150px', 
    borderRadius: '50px', 
    overflow: 'hidden',
    border: '0px solid white',
    transition: 'height 0.1s cubic-bezier(0.9, 0, 0.1, 1), border 0.06s ease-in-out',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    objectFit: 'cover',
    filter: 'blur(5px) brightness(70%)',
    transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
  };

  const handleHover = () => {
    containerRef.current.style.border = '2px solid white'; 
    containerRef.current.style.height = '300px'
    imageRef.current.style.transform = 'scale(1.1)'; 
    imageRef.current.style.filter = 'blur(15px) brightness(20%)'
    setDescriptionVisible(true);
  };

  const handleLeave = () => {
    containerRef.current.style.border = '0px solid white'; 
    containerRef.current.style.height = '150px'
    imageRef.current.style.transform = 'scale(1)'; 
    imageRef.current.style.filter = 'blur(5px) brightness(70%)';
    setDescriptionVisible(false);
  };

  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  return (
    <div
      style={containerStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      ref={containerRef}
    >
      <img
        src={imageUrl}
        alt=""
        style={imageStyle}
        ref={imageRef}
      />
      <div style={{
            position: 'absolute',
            textAlign: 'center',
            opacity: isDescriptionVisible ? '0%' : '100%' ,
            color: '#ffffff',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: '32px',
            fontStyle: 'italic',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', 
            transition: 'opacity 0.2s ease-in-out',
                }} ref={textRef}>{text1}</div>
      <div style={{
            position: 'absolute',
            textAlign: 'left',
            margin:'16px',
            opacity: isDescriptionVisible ? '100%' : '0%' ,
            color: '#ffffff',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', 
            transition: 'opacity 0.2s ease-in-out',
        }} ref={textRef}>{text2}</div>


    </div>
  );
};

export default Project;
