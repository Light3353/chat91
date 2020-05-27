import styled from "styled-components";

const ChatBlockMessage = styled.div`
	border: 1px solid #5b5a77;
	border-radius:7px;
	padding: 10px;
	background-color: #6f6198;
	max-width:60%;
	margin:10px 30px;
	display: inline-block;
	position:relative;
	color: #ceccd6;
	
	&:before {
		content: '';
		position: absolute;
		top:20%;
		left:-1%;
		width:6px;
		height:6px;
		border-top: 6px solid #6f6198;
		border-left: 6px solid #6f6198;
		transform: rotate(-45deg);
		
	}
	
		
	

`
export default ChatBlockMessage;