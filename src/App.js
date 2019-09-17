import React from 'react';
import LoginPage from './LoginPage';
import Dashbaord from './Dashbaord';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      <Route path="/dashbaord/" component={Dashbaord} />
    </Router>
  );
}

export default App;
