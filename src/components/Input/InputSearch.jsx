import React from 'react';
import styled from 'styled-components';
import {Input} from 'components/Input';

const InputSearch = styled(Input)`
position: relative;
height: 35px;
border-radius: 17px;
border-width: 0;
padding: 0 20px 0 40px;


&::placeholder{
color: white;
}


${({theme}) => `
	background-color: ${theme.colors.backgroundRight};
    color: ${theme.colors.white};
	
`}

`;

const InputSearcher = () => {
    return <React.Fragment>
        <InputSearch type="text" placeholder="Search"/>

    </React.Fragment>



}

export default React.memo(InputSearcher);