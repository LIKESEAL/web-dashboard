import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Ji from './pages/Ji';
import Main from './pages/Main';
import SY from './pages/SY';
import Seul from './pages/Seul';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sw"><Seul/></Route>
        <Route path="/jy"><Ji/></Route>
        <Route path="/sy"><SY/></Route>
        <Route path="/"><Main/></Route>
      </Switch>
    </Router>
  );
}

export default App;
