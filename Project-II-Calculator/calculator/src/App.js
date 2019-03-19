import React from 'react';
import './App.css';


import MidRow from './components/ButtonComponents/NumberButton.js';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import SecTwo from './components/ButtonComponents/ActionButton.js'
import SecSix from './components/ButtonComponents/ActionButton.js'
// import ActionButton

const App = () => {
  return (
    <div className="whole-calc">
      <CalcDisplay /> 
      <div className="pleaseFlex">
        <SecTwo />
        <MidRow />
        <SecSix />
      </div>
    </div>
  );
};

export default App;
