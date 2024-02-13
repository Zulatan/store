import React from 'react';
import { Counter } from './features/counter/Counter';
import Inventory, { inventory } from './inventory/inventory';
import './App.css';

function App() {
  return (
    <div className="App">
        <Counter />
        {/* <Inventory/> */}
    </div>
  );
}

export default App;
