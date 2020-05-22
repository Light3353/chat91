import styled from "styled-components";

const Scroll = styled.div`
		overflow-y: scroll;
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