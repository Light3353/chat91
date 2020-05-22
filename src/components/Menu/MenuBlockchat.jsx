import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from "../Input/InputSearch";
import ButtonPrimarychat from "../Button";
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import NavBlock from "../Block/NavBlock";
import InputBlockSearch from '../Block/Input/InputBlockSearch'

const MenuBlockchat = () => {
	return 	<NavBlock>
			<ButtonPrimarychat>
				<FontAwesomeIcon icon={faBars} size='2x' style={{ color: '#fff' }} />
			</ButtonPrimarychat>
			<InputBlockSearch>
				<div>
					<FontAwesomeIcon icon={faSearch} size='2x' style={{ color: '#fff' }} />
				</div>
				<Input type='text' placeholder='Search' />
			</InputBlockSearch>
		</NavBlock>
}

export default MenuBlockchat;