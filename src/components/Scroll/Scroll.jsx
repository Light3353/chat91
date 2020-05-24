import styled from "styled-components";

const Scroll = styled.div`
		padding-top:10px;
		overflow-y: scroll;
		scrollbar-color: #2b80ff #464466;
		scrollbar-width: thin;
			height: 500px;
			width: 100%;

		&::-webkit-scrollbar {
		    width: 5px;
		    background-color: #464466;
		}  
		&::-webkit-scrollbar-thumb {
		width: 8px;
		background-color: #2b80ff;
		}
`

export default Scroll;