import React from 'react';
import './Button.css';

// const twoSix = ['clear', '÷', 0, '='];

const ActionButton = () => {
    return (

        <div className="topTwoB">
            <div className="long_box clear">clear</div>
            <div className="redBox">÷</div>
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


export default ActionButton; 
// export default SecTwo;
