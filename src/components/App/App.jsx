import React from 'react';
import Header from 'components/Header';
import { Dialogs } from 'components/DialogsBlock';
import { WrapperPrimary } from 'components/Block';
import WrapperMessages from 'components/MessageBlock';
import { Primary as BlockDialogs } from 'components/DialogsBlock';
import WrapperContent from 'components/Block';
import { BrowserRouter } from 'react-router-dom';



const App = () => {
	return (
			<BrowserRouter>
				<WrapperPrimary>
					<BlockDialogs>
						<Header />
						<Dialogs />
					</BlockDialogs>
					<WrapperContent style={{backgroundColor: "#36344E"}}>
						<WrapperMessages />
					</WrapperContent>
				</WrapperPrimary>
			</BrowserRouter>
		)
};

export default React.memo(App);
