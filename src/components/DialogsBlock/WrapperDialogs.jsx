import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';
import DialogsItem from './DialogsItem.jsx';

const WrapDialogs = styled(Block)`
    flex-direction: column;
    height: 85vh;
    display: flex;
    overflow-y: scroll;
    padding: 10px 0 15px 0;
    margin-top: 5px;

`;

const Dialogs = () => {
    return (
        <WrapDialogs>
            <DialogsItem/>
        </WrapDialogs>
        
    )
}

export default React.memo(Dialogs);