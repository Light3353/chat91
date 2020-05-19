import React from 'react';
import Foto from 'img/Foto1.jpg';
import DialogBlock from "../Block/Dialog/DialogBlock";
import DialogImg from "../Block/Dialog/DialogImg";
import SmsUser from "../Text/Dialog/SmsUser";
import DialogNameSms from "../Block/Dialog/DialogNameSms";
import NameUser from "../Text/Dialog";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import Wrapper from "../Block/Wrapper";

const Dialogs = () => {
	return <DialogBlock>
		<DialogImg>
			<Wrapper>
				<img src={Foto} alt='Foto'/>
			</Wrapper>
			<p>
				<FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ color: 'green' ,backgroundColor: '#fff'}} />
			</p>
		</DialogImg>
		<DialogNameSms>
			<NameUser />
			<SmsUser />
		</DialogNameSms>

		
	</DialogBlock>


}

export default Dialogs;