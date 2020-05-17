import React from 'react';
import Item from './Item.jsx';
import UserIcon from './UserIcon.jsx';
import user1 from 'img/user1.jpeg';
// import user1 from 'components/img/user1.jpeg'
import { WrapperTitle } from 'components/Block';
import { TextTitle } from 'components/Text';
import { TextSubTitle } from 'components/Text';

const data = [
    {
        id: 1,
        name: 'Michael',
        soname: 'Rodrigez',
        src: 'img/user1.jpeg',
        text: 'Loren lorem lorem'
    },
    {
        id: 2,
        name: 'Kira',
        soname: 'Anderson',
        src: 'img/user2.jpg',
        text: 'Loren lorem lorem'
    },
    {
        id: 2,
        name: 'Kira',
        soname: 'Anderson',
        src: 'user2',
        text: 'Loren lorem lorem'
    },
    {
        id: 2,
        name: 'Kira',
        soname: 'Anderson',
        src: 'user2',
        text: 'Loren lorem lorem'
    }
];



const DialogsItem = () => {
   
    return (
        data.map((item) => {
            return (
                <Item>
                    <UserIcon src={item.src}/>
                    <WrapperTitle>
                        <TextTitle>{item.name} {item.soname}</TextTitle>
                        <TextSubTitle>{item.text}</TextSubTitle>
                    </WrapperTitle>    
                </Item>
            )
        })

    )
}


export default React.memo(DialogsItem);