import React from 'react';
import ChatBlockDown from "./ChatBlockDown";
import InputBlockAdd from "../Input/InputBlockAdd";
import InputAdd from "../../Input/InputAdd";
import InputBlockMessage from "../Input/InputBlockMessage";
import InputMessage from "../../Input/InputMessage";
import Smile from '../../../img/emojis.png'
import Attach from '../../../img/attach.png';
import ButtonSend from "../../Button/ButtonSend";
import onSubmit from './onSubmit.jsx';

const ChatBlockInput = () => {
	return 	<ChatBlockDown onSubmit={onSubmit}>
		<InputBlockAdd>
			<div>
				<img src={Attach} alt=""/>
			</div>
			<InputAdd type='file'/>
		</InputBlockAdd>
		<InputBlockMessage>
			<InputMessage rows="3"
			              name="body"
			              placeholder='Type your message...' />
		</InputBlockMessage>
		<InputBlockAdd >
			<img src={Smile} alt=""/>
		</InputBlockAdd>
		<ButtonSend type="submit"/>

	</ChatBlockDown>
}

export default ChatBlockInput;