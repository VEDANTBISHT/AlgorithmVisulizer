import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import './App.css';

function App() {
  return (
    <div className="Algo">
      <div className="App">
        <SortingVisualizer>
        </SortingVisualizer>
      </div>
      <div className="App">
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
    </div>


  );
}

export default App;