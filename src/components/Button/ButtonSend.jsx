import React from 'react';
import styled from 'styled-components';
import Enter from "../../img/Ellipse.png";




const ButtonV = styled.button`

	background-color: #373351;
	outline:none;
	border: none;
	align-items: center;
	// width:100%;
	height:100%;
	padding-right: 10px;
	transition: .2s;
	
	&:focus {
		transform: scale(.8);   
	}

`
const ButtonSend = ({...props}) => {
	return <ButtonV {...props} >
		<img src={Enter} alt=""/>

	</ButtonV>
}

export default ButtonSend;