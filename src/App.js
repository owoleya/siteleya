import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';
import Background from './components/background';

// import {Canvas} from "@react-three/fiber"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
        {/* Background with lower zIndex */}
        <div className='background' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <Background />
        </div>

        {/* Routes with higher zIndex */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;