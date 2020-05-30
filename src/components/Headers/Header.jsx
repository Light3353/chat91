import React from 'react';
import { BurgerIcon } from 'components/Icon';
import { InputSearch } from 'components/Input';
import { SearchIcon } from 'components/Icon';
import { Flex } from 'components/Block';
import styled from 'styled-components';

const WrapHeader = styled(Flex)`
    height: 80px;
    border-bottom: 3px solid rgba(255,255,255, .2);
    padding: 0 10px;
    width: auto;
`;



const Header = () => {

    const show = () => {
        alert('show');
    }
    return (
        <WrapHeader>
            <div onClick={ show } >
                <BurgerIcon />
            </div>
            <Flex>
                <SearchIcon/>
                <InputSearch/>
            </Flex>
        </WrapHeader>    
    )
}

export default React.memo(Header);