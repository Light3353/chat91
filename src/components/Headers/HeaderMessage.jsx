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
            <UserIcon src={props.data[0].src}/>
                <WrapperTitle>
                    <TextTitle>{props.data[0].name} {props.data[0].soname}</TextTitle>
                    <TextSubTitle>{props.data[0].text}</TextSubTitle>
                </WrapperTitle>   
        </WrapHeader>    
    )
}

export default React.memo(HeaderMessage);