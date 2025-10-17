import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the client-specific ReactDOM for React 18
import './index.css'; // Standard global styles (optional)
import App from './App'; // Import the main App component

// Get the root element from the HTML
const rootElement = document.getElementById('root'); 

// Create the root object using ReactDOM.createRoot
// This is the modern, recommended way to initialize a React 18 application.
const root = ReactDOM.createRoot(rootElement);

// Render the main App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you were using an older version of React (e.g., React 17):
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/