import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';
import MessageItem from './MessageItem.jsx';
import { HeaderMessage } from 'components/Headers';
import { InputMessage } from 'components/Input';
import { WrapInputMessage } from 'components/Block';


const MessagesBlock = styled(Block)`
    flex-direction: column;
    height: 100%;
    display: flex;
    // background-color: #36344E;
`;

const WrapperMessages = (props) => {
    return (
        <MessagesBlock>
            <HeaderMessage data={props.data} />
            <MessageItem />
            <WrapInputMessage>
                <InputMessage />
            </WrapInputMessage>
            
        </MessagesBlock>
        
    )
}

export default React.memo(WrapperMessages);