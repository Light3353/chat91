import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';

const Wrapper = styled(Block)`
    position: fixed;
    bottom: 0;
    right: 0;
`;

const Alert = () => {
    const [ state, setState ] = React.useState(() => {
        return {
            error: false,
        };
    });

    // onMounth посмотреть видео про редакс
    React.useEffect(() => {
        setTimeout(() => {
            setState(() => {

                return {
                    error: true,
                };
            })
        }, 2000);
    }, []);

    return <React.Fragment>
        {state.error === true
            ? <Wrapper>test</Wrapper>
            : <React.Fragment />}
    </React.Fragment>
    } 
    export default React.memo(Alert);
