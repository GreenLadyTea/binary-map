import React from 'react';
import { useState } from 'react';
import './App.css';
import BinaryRow from './BinaryRow/BinaryRow';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="wrapper">
      <div>
        <h1>Бинарный массив</h1>
      </div>
      <label>
        <input value={number} onChange={e => setNumber(e.target.value)} />
      </label>
      <div>
        <BinaryRow number={number % 256} />
      </div>
    </div>
  );
}

export default App;
