import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';
// import Background from './components/backgroundCamera';

// import {Canvas} from "@react-three/fiber"

function App() {
  // const location = useLocation();
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header className='background'>
      {/* <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}><Background /></Canvas> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      </header>
      {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      
      </div> */}
    </Router>
  );
}

export default App;