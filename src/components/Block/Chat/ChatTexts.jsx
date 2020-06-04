import React from 'react';
import Scroll from '../../Scroll/Scroll';
import ChatBlockMessage from './ChatBlockMessage'
// import ChatBlockMessageMe from "./ChatBlockMessageMe";
import { messages as fetchMessagesFunc} from '../../../fetches';
import { DialogsContext } from '../../App/App';
import ChatBlockInput from './ChatBlockInput';
import Socket from '../../Socket';

const ChatTexts = () => {
	const dialogs = React.useContext(DialogsContext);

	const [ state, setState ] = React.useState(() => ({
		data: [],
		dialogId: dialogs[0].id,

	}))
	console.log('Socket', Socket())
	//onMount

	const fetchMessages = React.useCallback((...rest) => fetchMessagesFunc(...rest, setState ),
		[
			setState,
		]);
	React.useEffect(() => {
		Socket().on('connect', () => {
			Socket().emit('messages', { dialogId: state.dialogId} )
			Socket().on('messages', fetchMessages)

		})
	}, [
		fetchMessages,
		state.dialogId,
	])

	return <React.Fragment>
	<Scroll>
		{state.data.map((item, i) => {
			return 	<ChatBlockMessage key={i} myMessage={!!item.me}>
					{item.body}
				</ChatBlockMessage>

		})}
		{/*<ChatBlockMessageMe>*/}
		{/*	adsdgdfgadsssssssssssssssssssssd wsdsacfsdfssvgsd dvsfvdfvdfwrgwdv*/}
		{/*</ChatBlockMessageMe>*/}

	</Scroll>
		<ChatBlockInput
			dialogId={state.dialogId}
			action={setState}/>
	</React.Fragment>


}

export default ChatTexts;