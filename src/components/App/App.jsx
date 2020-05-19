import React from 'react';
import PrimaryBlock from "../Block/PrimaryBlock";
import  Content from "../Block/Content/Content";
import ContentChat from "../Block/Content/ContentChat";
import MenuBlockchat from "../Menu";
import Dialogs from "../Dialogs";
import DialogItem from "../Dialogs/DialogItem";
import Scroll from "../Scroll/Scroll";
import ChatItem from "../Block/Chat";



const App = () => {
	return <PrimaryBlock>
		<Content>
			<MenuBlockchat />
			<Scroll>
				<Dialogs />
				<Dialogs />
				<Dialogs />
				<Dialogs />
				<Dialogs />
				<Dialogs />
				<Dialogs />
				<Dialogs />
				<Dialogs />
			</Scroll>
		</Content>

		<ContentChat>
			<ChatItem />
		</ContentChat>
	</PrimaryBlock>;
};

export default React.memo(App);
