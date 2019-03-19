import React from 'react';
import './Button.css';



const NumberButton = prop => {
    return <div className="number">{prop.propData}</div>
}

export default NumberButton;