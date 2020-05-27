import styled from 'styled-components';

const InputMessage = styled.textarea`

	outline: none;
	// transition: all .1s linear;
	min-width:50px;
	width:100%;

    border: none;
	align-items: center;
	height:100%;
    background-color:#373351;
    color:#fff;
    font-size: 20px;
    // padding-left: 50px;
     resize: none;
     
     overflow-y: auto;
			

		&::-webkit-scrollbar {
		    width: 5px;
		    background-color: #464466;
		}  
		    &::-webkit-scrollbar-thumb {
		    width: 8px;
		    background-color: #2b80ff;
		}
	

	// 	&::placeholder {
	// 	   color: #8f8497;
	//	   
	// 	}
	//	
		&:focus,
		&:active{
		// border-color: green;
		
	}
`
export default InputMessage;