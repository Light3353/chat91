import React from 'react';
import { UserIconWrap } from 'components/Icon';

const posImg = {
    position: "absolute",
    transform: "traslate(-50%, -50%)",
    top: "0",
    left: "0",
    width: "80px",
    height: "60px"
}

const UserIcon = (props) => {
    return (
        <UserIconWrap>
            <img src={props.src} alt="userAvatar" style={posImg}/>
        </UserIconWrap>
    )
};


export default React.memo(UserIcon);