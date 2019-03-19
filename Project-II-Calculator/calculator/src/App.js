import React from 'react';
import './App.css';


import NumberButton from './components/ButtonComponents/NumberButton.js';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import SecSix from './components/ButtonComponents/SecSix.js';
// import ActionButton

const App = () => {
  return (
    <div className="whole-calc">
      <CalcDisplay /> 
      <div className="pleaseFlex">
        <ActionButton />
        <NumberButton />
        <SecSix />
      </div>
    </div>
  );
};

export default App;
