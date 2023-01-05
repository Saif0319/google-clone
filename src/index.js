import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResultProvider from './context/ResultProvider';
import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ResultProvider>
        <App />
    </ResultProvider>
);


