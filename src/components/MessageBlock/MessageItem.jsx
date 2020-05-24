import React from 'react';
import Block from 'components/Block';
import styled from 'styled-components';


const WrapMessage = styled(Block)`
    flex-direction: column;
    height: 85vh;
    display: flex;
    overflow-y: scroll;
    padding: 10px 0 15px 0;
    // margin-top: 5px;

`;

const MessageItem = () => {
    return (
        <WrapMessage>
            
        </WrapMessage>
    )
};

export default React.memo(MessageItem);