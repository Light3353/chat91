import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons'



const ButtonV = styled.button`
	background-color: #373351;
	outline:none;
	border: none;
	border-left: 1px solid #5b5a77;
	margin: 0 0 -10px 0;
	width: 80px;

`
const ButtonVideo = () => {
	return <ButtonV>
			<FontAwesomeIcon icon={faVideo} size='2x' style={{ color: '#fff' }} />
	</ButtonV>
}

export default ButtonVideo;