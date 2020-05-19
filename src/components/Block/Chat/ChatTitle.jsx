import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Foto from '../../../img/Foto1.jpg'
import DialogNameSms from "../Dialog/DialogNameSms";
import NameUser from "../../Text/Dialog";
import SmsUser from "../../Text/Dialog/SmsUser";
import WrapperChat from "../WrapperChat";
import ChatBlock from "./ChatBlock";
import StatusUser from "../../Text/Dialog/StatusUser";
import ButtonVideo from "../../Button/ButtonVideo";



const ChatTitle = () => {
	return 	<ChatBlock>
		<WrapperChat>
			<img src={Foto} alt='Foto'/>
		</WrapperChat>
		<DialogNameSms>
			<NameUser />
			<StatusUser />
		</DialogNameSms>
		<ButtonVideo />

	</ChatBlock>
}

export default ChatTitle;