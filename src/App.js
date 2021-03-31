import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { PagesContent } from './pages';
function App() {
  return (
    <Router>
      <PagesContent />
    </Router>
  );
}

export default App;
