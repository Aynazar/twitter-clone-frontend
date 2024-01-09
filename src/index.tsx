import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';

import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme';

import { Provider } from 'react-redux';

import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	</ThemeProvider>
)

