import React from 'react';
import PrimaryBlock from "../Block/PrimaryBlock";
import  Content from "../Block/Content/Content";
import ContentChat from "../Block/Content/ContentChat";
import MenuBlockchat from "../Menu";
import ChatItem from "../Block/Chat";
import DialogScroll from "../Block/Dialog/DialogScroll";
import ChatTexts from "../Block/Chat/ChatTexts";
import {dialogs as fetchDialogs} from "../../fetches";

export const DialogsContext = React.createContext();

const App = () => {

	const [ state, setState ] = React.useState(() => ({
		data: [],
	}))

	//onMount
	React.useEffect(() => {
		fetchDialogs(setState);
	}, [setState])

	// console.log('state.data', state.data)
	return <PrimaryBlock>
		<Content>
		    <MenuBlockchat />
		    <DialogScroll value={state.data}/>
		</Content>
		<ContentChat>
		    <ChatItem />
			{state.data.length > 0
				? <DialogsContext.Provider value={state.data}>
					<ChatTexts/>
				</DialogsContext.Provider>
				: <React.Fragment />
			}
		</ContentChat>

	</PrimaryBlock>;
};

export default React.memo(App);
