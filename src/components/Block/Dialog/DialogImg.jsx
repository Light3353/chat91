import styled from "styled-components";
// import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";


const DialogImg = styled.div`
	padding: 0 20px;
	position:relative;

		& img {
			display: block;
			margin: 0 auto;
		}
		&  p {
			position: absolute;
			top: 40%;
			left: 70%;
			overflow: hidden;
			border-radius: 50%;

		}
`

export default DialogImg;