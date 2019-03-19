import React from 'react';
import './Button.css';

const twoSix = ['clear', '÷', 0, '='];


import ActionButton from './ActionButton.js'



const SecSix = () => {
    return (
        <div>
            <ActionButton className="long_box" propData={twoSix[2]} />
            <ActionButton className="redBox" propData={twoSix[3]} />
        </div>
    );
}

export default SecSix;