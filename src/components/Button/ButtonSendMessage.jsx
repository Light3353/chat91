import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    display: inline-block;
    position: relative;
    &::after {
        content: '➤';
        color: #5d5dd4;
        display: inline-block;
        position: absolute;
        font-size: 17px;
        left: 50%;
        top: 50%;   
        transform: translate(-40%, -50%);
    }
`;

const ButtonSendMessage = () => {
 return (
     <Button />
 )
};


export default React.memo(ButtonSendMessage);