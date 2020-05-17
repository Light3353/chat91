import React from 'react';
import Item from './Item.jsx';
import UserIcon from './UserIcon.jsx';
// import user1 from 'img/user1.jpeg';
// import user2 from 'img/user2.jpg';
import { WrapperTitle } from 'components/Block';
import { TextTitle } from 'components/Text';
import { TextSubTitle } from 'components/Text';

const data = [
    {
        id: 1,
        name: 'Michael',
        soname: 'Rodrigez',
        src: './static/media/user2.19254017.jpg',
        text: 'Loren lorem lorem'
    },
    {
        id: 2,
        name: 'Kira',
        soname: 'Anderson',
        src: './static/media/user1.7ec1dec1.jpeg',
        text: 'Loren lorem lorem'
    },
    {
        id: 3,
        name: 'Kira',
        soname: 'Anderson',
        src: './static/media/user1.7ec1dec1.jpeg',
        text: 'Loren lorem lorem'
    },
    {
        id: 4,
        name: 'Kira',
        soname: 'Anderson',
        src: './static/media/user1.7ec1dec1.jpeg',
        text: 'Loren lorem lorem'
    },
    {
        id: 5,
        name: 'Michael',
        soname: 'Rodrigez',
        src: './static/media/user2.19254017.jpg',
        text: 'Loren lorem lorem'
    },
    {
        id: 6,
        name: 'Michael',
        soname: 'Rodrigez',
        src: './static/media/user2.19254017.jpg ',
        text: 'Loren lorem lorem'
    },
    {
        id: 7,
        name: 'Michael',
        soname: 'Rodrigez',
        src: './static/media/user2.19254017.jpg',
        text: 'Loren lorem lorem'
    },
    {
        id: 8,
        name: 'Kira',
        soname: 'Anderson',
        src: './static/media/user1.7ec1dec1.jpeg',
        text: 'Loren lorem lorem'
    },
    {
        id: 9,
        name: 'Michael',
        soname: 'Rodrigez',
        src: './static/media/user2.19254017.jpg',
        text: 'Loren lorem lorem'
    },
    {
        id: 10,
        name: 'Kira',
        soname: 'Anderson',
        src: './static/media/user1.7ec1dec1.jpeg',
        text: 'Loren lorem lorem'
    },
    {
        id: 11,
        name: 'Michael',
        soname: 'Rodrigez',
        src: './static/media/user2.19254017.jpg',
        text: 'Loren lorem lorem'
    },
    {
        id: 12,
        name: 'Kira',
        soname: 'Anderson',
        src: './static/media/user1.7ec1dec1.jpeg',
        text: 'Loren lorem lorem'
    },
];



const DialogsItem = () => {
   
    return (
        data.map((index) => {
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