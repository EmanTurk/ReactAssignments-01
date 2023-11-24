import React from 'react';
import { createRoot } from 'react-dom/client';
import PrintApp from './App'; 

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrintApp />
  </React.StrictMode>
);
