import React from 'react';
import styled from 'styled-components';

const SearchSvg = styled.svg`
position: absolute;
width: 15px;
height: 15px;
fill: white;
left: 45px;
`

const IconSearch =()=>{

    return <SearchSvg xmlns="http://www.w3.org/2000/svg" width="14.482" height="15" viewBox="0 0 14.482 15">
        <path d="M15.246,13.663,11.676,9.95A6.054,6.054,0,1,0,7.04,12.112a5.991,5.991,0,0,0,3.47-1.1l3.6,3.741a.79.79,0,1,0,1.139-1.1ZM7.04,1.58A4.476,4.476,0,1,1,2.564,6.056,4.481,4.481,0,0,1,7.04,1.58Z" transform="translate(-0.984)" fill="#fff"/>
    </SearchSvg>
};

export default React.memo(IconSearch)