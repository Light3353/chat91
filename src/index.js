import store from './redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components';




let rerenderDom = (state) => {
    ReactDOM.render( 
            <App state={ state } dispatch={ store.dispatch.bind(store) } />,
        document.getElementById('root')
    )
}
rerenderDom(store.getState());
store.subscribe(rerenderDom);


