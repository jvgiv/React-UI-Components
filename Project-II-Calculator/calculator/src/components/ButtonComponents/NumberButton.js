import React from 'react';
import './Button.css';

const rowThree = [7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+'];

// const rowFour = [];

// const rowFive = [];

const NumberButton = () => {
    return (
    <div className="num_row">
        <div className="keys">7</div>
        <div className="keys">8</div>
        <div className="keys">9</div>
        <div className="redBox">x</div>
        <div className="keys">4</div>
        <div className="keys">5</div>
        <div className="keys">6</div>
        <div className="redBox">-</div>
        <div className="keys">1</div>
        <div className="keys">2</div>
        <div className="keys">3</div>
        <div className="redBox">+</div>
    </div> 
    );
}


// const MidRow = () => {
//     return(
//         <div className="mid_section">
//             <NumberButton propData={rowThree[0]} />
//             <NumberButton propData={rowThree[1]} />
//             <NumberButton propData={rowThree[2]} />
//             <NumberButton className="redBox" propData={rowThree[3]} />
//             <NumberButton propData={rowThree[4]} />
//             <NumberButton propData={rowThree[5]} />
//             <NumberButton propData={rowThree[6]} />
//             <NumberButton className="redBox" propData={rowThree[7]} />
//             <NumberButton propData={rowThree[8]} />
//             <NumberButton propData={rowThree[9]} />
//             <NumberButton propData={rowThree[10]} />
//             <NumberButton className="redBox" propData={rowThree[11]} />
//         </div>
//     )
// }


export default NumberButton;
// export default MidRow;