// /src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AppProviders from './providers/AppProviders';
import ErrorBoundary from './components/ErrorBoundary';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles';

// Select the DOM element
const container = document.getElementById('root');

// Create the root
const root = createRoot(container);

// Render the application
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <AppProviders>
                <App />
            </AppProviders>
        </ErrorBoundary>
    </React.StrictMode>
);

