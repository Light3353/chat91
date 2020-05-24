import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const Wrapper = styled.div`
	width: 22px;
	height: 22px;
	font-size: 0.6rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	
	${({theme: {icons: {checkCircle}}}) => {
    return `background-color: ${checkCircle.backgroundColor};   
 `
}}
`;
const CheckCircle = () => (
    <Wrapper>
        <FontAwesomeIcon icon={faCheck}/>
    </Wrapper>
);
export default CheckCircle;
