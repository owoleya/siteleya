import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';

function App() {
  // const location = useLocation();
  return (
    <Router>
      <header className='background'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      </header>
    </Router>
  );
}

export default App;