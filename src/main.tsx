import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const basename = process.env.PUBLIC_URL;


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <BrowserRouter basename={basename}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
            </BrowserRouter>

);
