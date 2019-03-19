import React from 'react';
import './Button.css';

const twoSix = ['clear', '÷', 0, '='];

const ActionButton = prop => {
    return <div className="second_six">{prop.propData}</div>
}

const SecTwo = () => {
    return (
        <div>
            <ActionButton className="long_box" propData={twoSix[0]} />
            <ActionButton className="redBox" propData={twoSix[1]} />
        </div>
    );
}



export default SecTwo;
