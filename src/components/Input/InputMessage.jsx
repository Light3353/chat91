import styled from 'styled-components';

const InputMessage = styled.textarea`

	outline: none;
	min-width:50px;
	width:100%;
	border: 1px solid #373351;
	align-items: center;
	height:100%;
	background-color:#373351;
	color:#fff;
	font-size: 20px;
    resize: none;
    overflow-y: auto;
    scrollbar-color: #2b80ff #373351;
		scrollbar-width: thin;
			
		&::-webkit-scrollbar {
		    width: 5px;
		    background-color: #464466;
		}  
		    &::-webkit-scrollbar-thumb {
		    width: 8px;
		    background-color: #2b80ff;
		}

		&:focus,
		&:active{
		// border-color: #2b80ff;
		
	}
`
export default InputMessage;