import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons'



const ButtonV = styled.button`

	background-color: #373351;
	outline:none;
	border: none;
	border-left: 1px solid #5b5a77;
	align-items: center;
	width:100%;
	height:100%;

`
const ButtonVideo = () => {
	return <ButtonV>
			<FontAwesomeIcon icon={faVideo} size='2x' style={{ color: '#fff' }} />
	</ButtonV>
}

export default ButtonVideo;