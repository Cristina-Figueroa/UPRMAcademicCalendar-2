import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Generate from './Generate'


const App = () => {
  return (
      <Router>
          <Routes>
              {/* <Route path="/" element={<Home/>} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/generate" element={<Calendar/>} />
              <Route path="/about" element={<About/>} /> */}
                <Route path="/edit-holidays" element={<Generate/>} />


              {/* Add other routes as needed */}
          </Routes>
      </Router>
  );
};

export default App;
