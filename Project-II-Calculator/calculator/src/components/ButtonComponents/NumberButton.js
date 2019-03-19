import React from 'react';
import './Button.css';

const rowThree = [7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+'];

// const rowFour = [];

// const rowFive = [];

const NumberButton = prop => {
    return <div className="num_row">{prop.propData}</div>
}


const MidRow = () => {
    return(
        <div className="mid_section">
            <NumberButton propData={rowThree[0]} />
            <NumberButton propData={rowThree[1]} />
            <NumberButton propData={rowThree[2]} />
            <NumberButton className="redBox" propData={rowThree[3]} />
            <NumberButton propData={rowThree[4]} />
            <NumberButton propData={rowThree[5]} />
            <NumberButton propData={rowThree[6]} />
            <NumberButton className="redBox" propData={rowThree[7]} />
            <NumberButton propData={rowThree[8]} />
            <NumberButton propData={rowThree[9]} />
            <NumberButton propData={rowThree[10]} />
            <NumberButton className="redBox" propData={rowThree[11]} />
        </div>
    )
}



export default MidRow;