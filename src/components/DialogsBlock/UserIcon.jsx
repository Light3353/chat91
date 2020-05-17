import React from 'react';
import { UserIconWrap } from 'components/Icon';

const posImg = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    width: "90px",
    height: "60px",
}

const UserIcon = (props) => {
    return (
        <UserIconWrap>
            <img src={props.src} alt="user" style={posImg}/>
        </UserIconWrap>
    )
};


export default React.memo(UserIcon);