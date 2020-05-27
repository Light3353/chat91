import React from 'react';
import Foto from '../../img/Foto.jpg'
import DialogBlock from "../Block/Dialog/DialogBlock";
import DialogImg from "../Block/Dialog/DialogImg";
import SmsUser from "../Text/Dialog/SmsUser";
import DialogNameSms from "../Block/Dialog/DialogNameSms";
import NameUser from "../Text/Dialog";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import Wrapper from "../Block/Wrapper";
import styled from "styled-components";

const Name = styled.div`
	font-size: 27px;
	color: #fff;
`
const Dialogs = ({name = ''}) => {
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
				<Name>{name}</Name>
				<SmsUser />
			</DialogNameSms>
	</DialogBlock>
}

export default Dialogs;