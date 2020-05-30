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
    border: none;
    outline: transparent;
    &::after {
        content: '➤';
        color: #5d5dd4;
        display: inline-block;
        position: absolute;
        font-size: 20px;
        left: 50%;
        top: 50%;   
        transform: translate(-40%, -50%);
    }
`;

const ButtonSendMessage = ({ onClick }) => {
 return (
     <Button onClick = { onClick } />
 )
};


export default ButtonSendMessage;