import React from 'react';
// import styled from 'styled-components';
import Input from './Input.jsx';


const styledInput = {
    width: "70%",
    height: "100",
    padding: "0 5%",
    fontSize: "15px",
    backgroundColor: "transparent",
    border: "none",
    overflowWrap: "break-word",
    wordWrap: "break-word"
};


const InputMessage = ({ newMessage, onChange, value }) => {
    return (
        <Input style={styledInput} type='text' placeholder='Type your message...' ref = { newMessage } onChange={onChange} value={value}/>
        
    )
}


export default InputMessage;
