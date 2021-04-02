import React from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from "react-router-dom";
import { PagesContent } from './pages';

const basePath = process.env.BASE_PATH || '/';

function App() {
  return (
    <Router basename={ basePath }>
      <PagesContent />
    </Router>
  );
}

export default hot(module)(App);
