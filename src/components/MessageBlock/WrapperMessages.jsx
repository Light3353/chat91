import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';


const Messages = styled(Block)`
    flex-direction: column;
    height: 100%;
    display: flex;
    // background-color: #36344E;
    overflow: scroll;
`;

const WrapperMessages = () => {
    return (
        <Messages>
            {/* <MassegeItem/> */}
        </Messages>
        
    )
}

export default React.memo(WrapperMessages);