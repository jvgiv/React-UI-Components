import React from 'react';
import './Header.css';

import ImageThumbnail from "./ImageThumbnail.js";
import HeaderTitle from "./HeaderTitle.js";
import HeaderContent from "./HeaderContent.js";


const HeaderContainer = () => {
    return (
        <div className="HeaderContainer">
            <div className="HeaderContainer--img">
                <ImageThumbnail />
            </div>
            <div className="title-content">
                <HeaderTitle />
            </div>
            <HeaderContent />
        </div>
    )
}


export default HeaderContainer;