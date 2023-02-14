import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Context } from './Context'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
      <Context>
        <App />
      </Context>
);



