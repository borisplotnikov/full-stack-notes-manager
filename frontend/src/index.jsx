// frontend > src > index.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/App.jsx';
import AppProviders from './providers/AppProviders.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ErrorBoundary> */}
        {/* <AppProviders> */}
            <App />
        {/* </AppProviders> */}
    {/* </ErrorBoundary> */}
  </StrictMode>,
);
