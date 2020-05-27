import React from 'react';
import PrimaryBlock from "../Block/PrimaryBlock";
import  Content from "../Block/Content/Content";
import ContentChat from "../Block/Content/ContentChat";
import MenuBlockchat from "../Menu";
import ChatItem from "../Block/Chat";
import ChatBlockInput from "../Block/Chat/ChatBlockInput";
import DialogScroll from "../Block/Dialog/DialogScroll";
import ChatTexts from "../Block/Chat/ChatTexts";


const App = () => {
	return <PrimaryBlock>
		<Content>
		    <MenuBlockchat />
		    <DialogScroll />
		</Content>
		<ContentChat>
		    <ChatItem />
		    <ChatTexts />
		    <ChatBlockInput />
		</ContentChat>

	</PrimaryBlock>;
};

export default React.memo(App);
