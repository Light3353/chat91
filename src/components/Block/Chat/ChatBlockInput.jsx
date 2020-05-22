import React from 'react';
import DialogNameSms from "../Dialog/DialogNameSms";
import NameUser from "../../Text/Dialog";
import WrapperImg from "../WrapperImg";
import ChatBlock from "./ChatBlock";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faSearch } from '@fortawesome/free-solid-svg-icons'

import StatusUser from "../../Text/Dialog/StatusUser";
import ButtonVideo from "../../Button/ButtonVideo";
import ChatBlockButtonVideo from "./ChatBlockButtonVideo";
import ButtonPrimarychat from "../../Button";
import Input from "../../Input";
import InputBlock from "../Input";
import InputAdd from "../../Input/InputAdd";

const ChatBlockInput = () => {
	return 	<ChatBlock>
		<InputBlock>
			<div>
				<FontAwesomeIcon icon={faPaperclip} size='2x' style={{ color: '#fff' }} />
			</div>
			<InputAdd type='file'/>
		</InputBlock>
		{/*<DialogNameSms>*/}
		{/*	<NameUser />*/}
		{/*	<StatusUser />*/}
		{/*</DialogNameSms>*/}
		{/*<ChatBlockButtonVideo>*/}
		{/*	<ButtonVideo />*/}
		{/*</ChatBlockButtonVideo>*/}
	</ChatBlock>

}

export default ChatBlockInput;