import React from 'react';
import Foto from '../../../img/Foto1.jpg'
import DialogNameSms from "../Dialog/DialogNameSms";
import NameUser from "../../Text/Dialog";
import WrapperImg from "../WrapperImg";
import ChatBlock from "./ChatBlock";
import StatusUser from "../../Text/Dialog/StatusUser";
import ButtonVideo from "../../Button/ButtonVideo";
import ChatBlockButtonVideo from "./ChatBlockButtonVideo";


const ChatTitle = () => {
	return 	<ChatBlock>
		<WrapperImg>
			<img src={Foto} alt='Foto'/>
		</WrapperImg>
		<DialogNameSms>
			<NameUser />
			<StatusUser />
		</DialogNameSms>
		<ChatBlockButtonVideo>
			<ButtonVideo />
		</ChatBlockButtonVideo>
	</ChatBlock>

}

export default ChatTitle;