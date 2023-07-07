import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PotionShopProvider } from './Context/AppContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<PotionShopProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</PotionShopProvider>
);

reportWebVitals();
