import React from 'react';
import WrapButtonMenu from './WrapButtonMenu.jsx';
import PrimaryIcon  from './PrimaryIcon.jsx';





const BurgerIcon = () => {
    return (
        <WrapButtonMenu>
            <PrimaryIcon viewBox="0 0 24 24" width="30" height="30" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></PrimaryIcon>
        </WrapButtonMenu>

    )
};


export default React.memo(BurgerIcon);