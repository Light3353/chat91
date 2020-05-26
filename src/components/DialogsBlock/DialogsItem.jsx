import React from 'react';
import Item from './Item.jsx';
import UserIcon from './UserIcon.jsx';
import user1 from 'img/user1.jpeg';
import user2 from 'img/user2.jpg';
import { WrapperTitle } from 'components/Block';
import { TextTitle } from 'components/Text';
import { TextSubTitle } from 'components/Text';


const DialogsItem = (props) => {

    return (
        props.state.map((index) => {
            return (
                <Item key={index.id}>
                    <UserIcon src={index.src}/>
                    <WrapperTitle>
                        <TextTitle>{index.name} {index.soname}</TextTitle>
                        <TextSubTitle>{index.text}</TextSubTitle>
                    </WrapperTitle>    
                </Item>
            )
        })

    )
}


export default React.memo(DialogsItem);