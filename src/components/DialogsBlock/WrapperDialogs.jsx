import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';
import DialogsItem from './DialogsItem.jsx';

const WrapDialogs = styled(Block)`
    flex-direction: column;
    height: 100%;
    display: flex;
    overflow: scroll;
`;

const WrapperDialogs = () => {
    return (
        <WrapDialogs>
            <DialogsItem/>
        </WrapDialogs>
        
    )
}

export default React.memo(WrapperDialogs);