import React from 'react';
import ButtonMenu from 'components/Button';
import { InputSearch } from 'components/Input';
import Flex from './Flex.jsx';
import styled from 'styled-components';

const WrapHeader = styled(Flex)`
    height: 80px;
    border-bottom: 2px solid rgba(255,255,255, .2);
    padding: 0 10px;
    width: auto;
`;
const Header = () => {
    return (
        <WrapHeader>
            <ButtonMenu/>
            <InputSearch/>
        </WrapHeader>    
    )
}

export default React.memo(Header);