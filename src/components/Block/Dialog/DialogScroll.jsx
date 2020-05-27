import React from 'react';
import Dialogs from "../../Dialogs";
import {dialogs as fetchDialogs} from "../../../fetches";
import Scroll from "../../Scroll/Scroll";


const DialogScroll = () => {
	const [ state, setState ] = React.useState(() => ({
		data: [],
	}))

	//onMount
	React.useEffect(() => {
		fetchDialogs(setState);
	}, [setState])

	return <Scroll>
	{state.data.map(({name, body = ''}, i) => {
		return  <Dialogs
			key={i}
			name={name}
			body={body}
		/>
	})}
	</Scroll>
}

export default DialogScroll;