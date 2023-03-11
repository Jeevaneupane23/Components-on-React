import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import { NavigationProvider } from './Context/Navigation';


import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavigationProvider>
        <App />

    </NavigationProvider>



);

