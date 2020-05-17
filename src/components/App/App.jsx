import React from 'react';
// import { Flex as WrapperPrimary } from 'components/Block';
import { Header } from 'components/Block';
import { WrapperDialogs } from 'components/DialogsBlock';
import { WrapperPrimary } from 'components/Block';
import WrapperMessages from 'components/MessageBlock';
import { WrapperContent } from 'components/Block';


const App = () => {
	return <WrapperPrimary>
				<WrapperContent style={{backgroundColor: "#4B4B66"}}>
					<Header />
					<WrapperDialogs />
				</WrapperContent>
				<WrapperContent style={{backgroundColor: "#36344E"}}>
					<WrapperMessages />
				</WrapperContent>
			</WrapperPrimary>
};

export default React.memo(App);
