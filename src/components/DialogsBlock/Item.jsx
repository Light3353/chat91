import { Flex } from 'components/Block';
import styled from 'styled-components';

const Item = styled(Flex)`
    min-height: 80px;
    border-bottom: 2px solid rgba(255,255,255, .1);
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    width: 90%;
    margin: 0 auto;
`;



export default Item;