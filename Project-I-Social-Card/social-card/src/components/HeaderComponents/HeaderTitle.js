import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
         <div className="title">
            <div className="title--child">
                <h3 className="title--bold">Lambda School</h3>
            </div>
            <div className="title--child">
                <p className="title--notbold">@LambdaSchool</p>
            </div>
         </div>
    );
};



export default HeaderTitle;