import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path = "/"  exact></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
