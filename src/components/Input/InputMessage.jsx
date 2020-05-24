import React from 'react';
import styled from 'styled-components';
import Input from './Input.jsx';


const Message = styled(Input)`
    width: 70%;
    height: 100%;
    padding: 0 5%;
    font-size: 15px;
    background: transparent;
    border: none;
    overflow-wrap: break-word;
    word-wrap: break-word;
`;


const InputMessage = () => {
    return (
        <Message type="text" placeholder="Type your message..." />
    )
}


export default React.memo(InputMessage);
