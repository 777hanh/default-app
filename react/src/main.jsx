import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalComponent } from '@/components/GlobalComponent';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalComponent>
            <App />
        </GlobalComponent>
    </StrictMode>
);
