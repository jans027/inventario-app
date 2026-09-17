import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// Create the root element where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside BrowserRouter to enable routing
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);