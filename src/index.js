import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<BrowserRouter
		future={{
			v7_startTransition: true,
			v7_relativeSplatPath: true
		}}
	>
		<App />
	</BrowserRouter>
	// </React.StrictMode>
);

// ✅ Small change for Git practice
console.log('App started successfully!');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
