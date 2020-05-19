import styled from "styled-components";
// import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";


const DialogImg = styled.div`

	position:relative;

		& img {
			display: block;
			margin: 0 auto;
		}
		&  p {
			position: absolute;
			top: 40%;
			left: 80%;
			overflow: hidden;
			border-radius: 50%;

		}
`

export default DialogImg;