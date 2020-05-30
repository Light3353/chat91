import state, { subscribe } from './redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components';
import { addMessage } from './redux';
import { updateMessageText } from './redux';



let rerenderDom = (state) => {
    ReactDOM.render( 
            <App state={state} addMessage={addMessage} updateMessageText={updateMessageText}/>,
        document.getElementById('root')
    )
}
rerenderDom(state)
subscribe(rerenderDom);


