import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './PageHome';

function App() {
  
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
