import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { CritterContextProvider } from './CritterContext/CritterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CritterContextProvider>
      <App />
    </CritterContextProvider>
  </React.StrictMode>
);


