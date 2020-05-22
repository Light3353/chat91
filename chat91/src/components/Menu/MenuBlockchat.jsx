import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from "../Input/Input";
import ButtonPrimarychat from "../Button";
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import NavBlock from "../Block/NavBlock";
import InputBlock from '../Block/Input/InputBlock'

const MenuBlockchat = () => {
	return 	<NavBlock>
			<ButtonPrimarychat>
				<FontAwesomeIcon icon={faBars} size='2x' style={{ color: '#fff' }} />
			</ButtonPrimarychat>
			<InputBlock>
				<div>
					<FontAwesomeIcon icon={faSearch} size='2x' style={{ color: '#fff' }} />
				</div>
				<Input type='text' placeholder='Search' />
			</InputBlock>

		</NavBlock>



}

export default MenuBlockchat;