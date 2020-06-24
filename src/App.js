import React from 'react';
import './App.css';
import Calculator from '../src/Components/Calculator/UI/Calculator';
import { BrowserRouter as Router} from "react-router-dom";
import ParticleComponent from '../src/Components/Calculator/UI/Particles/ParticleComponent';

function App() {
  return (
    <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Calculator/>
        </div>
      </div>
    </Router>
  );
}

export default App;
