import React from 'react';
import Dialogs from "../../Dialogs";
import Scroll from "../../Scroll/Scroll";


const DialogScroll = ({value}) => {

	return <React.Fragment>
			<Scroll>
		{value.map(({name, body = ''}, i) => {
			return  <Dialogs
				key={i}
				name={name}
				body={body}
			/>
		})}
		</Scroll>
	</React.Fragment>
}

export default DialogScroll;