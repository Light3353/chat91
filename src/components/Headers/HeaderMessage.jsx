import React from 'react';
import { Flex } from 'components/Block';
import styled from 'styled-components';
import { UserIcon } from 'components/DialogsBlock';
import { TextTitle } from 'components/Text';
import { TextSubTitle } from 'components/Text';
import { WrapperTitle } from 'components/Block';

const WrapHeader = styled(Flex)`
    height: 82px;
    border-bottom: 3px solid rgba(255,255,255, .2);
    padding: 0 8%;
    width: 100%;
`;
const HeaderMessage = (props) => {
    return (
        <WrapHeader>
            <UserIcon src={props.state[0].src}/>
                <WrapperTitle>
                    <TextTitle>{props.state[0].name} {props.state[0].soname}</TextTitle>
                    <TextSubTitle>{props.state[0].text}</TextSubTitle>
                </WrapperTitle>   
        </WrapHeader>    
    )
}

export default React.memo(HeaderMessage);