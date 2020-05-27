import styled from "styled-components";
import ChatBlockMessage from "./ChatBlockMessage";


const ChatBlockMessageMe = styled(ChatBlockMessage)`

	align-self: flex-end; 
	background-color: #464067;
	
	&:before {
		left: 99.5%;
		transform: rotate(135deg);
		border-top: 1px solid #6f6198;
		border-left: 1px solid #6f6198;
		background-color: #464067;

		
	
	
	}
	


`

export default ChatBlockMessageMe;

