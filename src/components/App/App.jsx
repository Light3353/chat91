import React from 'react';
import Header from 'components/Headers';
import { Dialogs } from 'components/DialogsBlock';
import { WrapperPrimary } from 'components/Block';
import WrapperMessages from 'components/MessageBlock';
import { Primary as BlockDialogs } from 'components/DialogsBlock';
import { WrapperContent } from 'components/Block';
// import { BrowserRouter } from 'react-router-dom';




const App = (props) => {
	return (
			// <BrowserRouter>
				<WrapperPrimary>
					<BlockDialogs>
						<Header />
						<Dialogs state={ props.state.dialogs } />
					</BlockDialogs>
					<WrapperContent style={{backgroundColor: "#36344E"}}>
						<WrapperMessages dispatch={ props.dispatch } state={ props.state }/>
					</WrapperContent>
				</WrapperPrimary>
			// </BrowserRouter>
		)
};

export default App;
