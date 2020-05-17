import React from 'react';
import styled from 'styled-components';
import Input from './Input.jsx';
// import search form ''


const InputNav = styled(Input)`
    font-size: 12px;
    width: 100%;
    padding: 10px 10%;
    border-radius: 15px;
    border: transparent;
    background-color: #36344E;
    &::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;

    }
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