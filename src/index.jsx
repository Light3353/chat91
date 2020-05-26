import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components';
// import { ThemeProvider } from 'styled-components';
// import * as theme from 'theme';
import state from './redux';


ReactDOM.render( 
		<App state={state} />,
	document.getElementById('root')
);
