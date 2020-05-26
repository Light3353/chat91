import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';
// import { Flex } from 'components/Block';

const Item = styled(Block)`
    overflow: visible;
`
const Text = styled.p`
    padding: 10px;
    color: #fff;
    height: auto;
    background-color: #4B4B66;
    max-width: 50%;
    width: auto;
    word-wrap: break-word;
    line-height: 1.3;
    font-size: 13px;
    margin: 20px 0 2px 0;
    border-radius: 8px;
    position: relative;
`;
const TimePost = styled.span`
    color: rgba(255,255,255,.5);
    font-size: 10px;
`


const Message = (props) => {
    
    return (
        props.state.map((i) => { 
            return (
                <Item key={i.id}>
                    <Text>{i.message}</Text>
                    <TimePost>{i.createAt}</TimePost>
                </Item>
            )
        })
    )    
};


export default React.memo(Message);