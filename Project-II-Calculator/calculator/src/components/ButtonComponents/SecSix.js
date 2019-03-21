import React from 'react';
import './Button.css';

// const twoSix = ['clear', '÷', 0, '='];

const SecSix = prop => {
    return (
        <div className="lastDiv">
            <div className="long_box bot">0</div>
            <div className="redBox equals">=</div>
        </div>
    );
}

// const SecTwo = () => {
//     return (
//         <div>
//             <ActionButton className="long_box" propData={twoSix[0]} />
//             <ActionButton className="redBox" propData={twoSix[1]} />
//         </div>
//     );
// }


// export default ActionButton; 
export default SecSix;