import React from 'react';
// import { Flex as WrapperPrimary } from 'components/Block';
import Header from 'components/Header';
import { Dialogs } from 'components/DialogsBlock';
import { WrapperPrimary } from 'components/Block';
import WrapperMessages from 'components/MessageBlock';
import { Primary as BlockDialogs } from 'components/DialogsBlock';
import WrapperContent from 'components/Block';


const App = () => {
	return <WrapperPrimary>
				<BlockDialogs>
					<Header />
					<Dialogs />
				</BlockDialogs>
				<WrapperContent style={{backgroundColor: "#36344E"}}>
					<WrapperMessages />
				</WrapperContent>
			</WrapperPrimary>
};

export default React.memo(App);
