import styled from 'styled-components';
import InputBlockSearch from "./InputBlockSearch";


const InputBlockAdd = styled(InputBlockSearch)`
	width: 12%;
	align-items: center;
	margin: 0 0px 0px 10px;
	position:relative;
	overflow: hidden;
	
	& div {
	position: absolute;
	top:30%;
	left:10px;
	}
`
export default InputBlockAdd;