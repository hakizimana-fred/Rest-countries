import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import {ThemeWrapper } from './context/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<ThemeWrapper>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
</ThemeWrapper>
);

