import React from 'react';
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Sorting from "./components/Sorting/Sorting";
import Home from "./components/Home"
import Pathfinding from "./components/Pathfinding/Pathfinding"
import ConvexHull from './components/ConvexHull/ConvexHull';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/pathfind" element={<Pathfinding />} />
            <Route path="/sorting" element={<Sorting />} />
            <Route path="/convexhull" element={<ConvexHull />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;