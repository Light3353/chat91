import React from 'react';
import styled from 'styled-components';
import Input from './Input.jsx';
// import search form ''


const InputNav = styled(Input)`
    font-size: 12px;
    width: 100%;
    padding: 10px 5% 10px 40px;
    border-radius: 35px;
    border: transparent;
    background-color: #36344E;
    position: relative;
    &::placeholder {
        color: #fff;
    }
`;


const InputSearch = () => {
    return ( 
        <InputNav type="search" placeholder="Search" />
    )
} 

export default React.memo(InputSearch);