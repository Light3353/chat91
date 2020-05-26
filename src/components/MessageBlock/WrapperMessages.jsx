import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';
import Messages from './Messages.jsx';
import { HeaderMessage } from 'components/Headers';
import { InputMessage } from 'components/Input';
import { WrapInputMessage } from 'components/Block';
import ButtonSendMessage from 'components/Button';


const MessagesBlock = styled(Block)`
    flex-direction: column;
    height: 100%;
    display: flex;
    // background-color: #36344E;
    border-left: 2px solid rgba(255,255,255, .2);
`;

const WrapperMessages = (props) => {
    return (
        <MessagesBlock>
            <HeaderMessage state={props.state.dialogs} />
            <Messages state={props.state.messages} />
            <WrapInputMessage>
                <InputMessage />
                <ButtonSendMessage type="submit"/>
            </WrapInputMessage>
            
        </MessagesBlock>
        
    )
}

export default React.memo(WrapperMessages);