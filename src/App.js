import React from 'react';
import './App.css';
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Sorting from "./components/Sorting";
import Home from "./components/Home"
import Pathfinding from "./components/Pathfinding/Pathfinding"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/pathfind" element={<Pathfinding />} />
            <Route path="/sorting" element={<Sorting />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
