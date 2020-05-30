import React from 'react';
import Block from 'components/Block';
import styled from 'styled-components';
import Message from './Message.jsx';


const Wrap = styled(Block)`
    flex-direction: column;
    height: 85vh;
    width: auto;
    display: flex;
    overflow-y: scroll;
    padding: 10px 5% 15px 5%;
`;

const Messages = (props) => {
    return (
        <Wrap>
            <Message state={props.state} />
        </Wrap>
    );
};


export default Messages;