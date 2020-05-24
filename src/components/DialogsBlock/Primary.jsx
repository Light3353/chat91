import { WrapperContent } from 'components/Block';
// import React from 'react';
import styled from 'styled-components';

// const myStyle = {
//     backgroundColor: "4B4B66",
//     width: "30%",

// }

// const Primary = () => {
//     return (
//         <WrapperContent style={myStyle}/>
//     )
// };


const Primary = styled(WrapperContent)`
    background-color: #4B4B66;
    width: 30%;
    min-width: 260px;
`;

export default Primary;