import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonPrimarychat from "../Button";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Foto from "../../img/Foto.jpg";
import DialogNameSms from "../Block/Dialog/DialogNameSms";
import NameUser from "../Text/Dialog";
import SmsUser from "../Text/Dialog/SmsUser";
import DialogBlock from "../Block/Dialog/DialogBlock";
import Wrapper from "../Block/Wrapper";


const DialogItem = () => {
	return 	<DialogBlock>
				<Wrapper>
					<img src={Foto} alt='Foto'/>
				</Wrapper>
				<DialogNameSms>
					<NameUser />
					<SmsUser />
				</DialogNameSms>
				<ButtonPrimarychat>
					<FontAwesomeIcon icon={faBars} size='2x' style={{ color: '#fff' }} />
				</ButtonPrimarychat>
	</DialogBlock>

}

export default DialogItem;