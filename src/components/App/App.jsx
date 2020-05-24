import React from 'react';
import Header from 'components/Headers';
import { Dialogs } from 'components/DialogsBlock';
import { WrapperPrimary } from 'components/Block';
import WrapperMessages from 'components/MessageBlock';
import { Primary as BlockDialogs } from 'components/DialogsBlock';
import { WrapperContent } from 'components/Block';
import { BrowserRouter } from 'react-router-dom';



const App = () => {
	let data = [
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
	return (
			<BrowserRouter>
				<WrapperPrimary>
					<BlockDialogs>
						<Header />
						<Dialogs data={data} />
					</BlockDialogs>
					<WrapperContent style={{backgroundColor: "#36344E"}}>
						<WrapperMessages data={data} />
					</WrapperContent>
				</WrapperPrimary>
			</BrowserRouter>
		)
};

export default React.memo(App);
