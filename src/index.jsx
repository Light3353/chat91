import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App.jsx';
import { ThemeProvider } from 'styled-components';
import * as theme from 'theme';

ReactDOM.render( 
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
