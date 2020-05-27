import styled from 'styled-components';

const ButtonPrimarychat = styled.button`
	position: relative;
	margin: 22px 10px;
	width:46px;
	height:46px;
	display:block;
	background-color:transparent;
	border:none;
	outline:none;
	align-self:center;

	&:before {
	content: '';
	width: 50px;
	height:50px;
	position:absolute;
	top:50%;
	left:50%;
	transform: translate(-50%, -50%);
	border-radius:50%;
	border: 2px solid #fff;
	transition: .2s all;
	}
	
	&:focus::before,
	&:active::before{
		width: 60px;
		height:60px;
		border-color: green;
	}
`

export default ButtonPrimarychat;