import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Context } from './Context'
import SimpleReactLightbox from 'simple-react-lightbox'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <SimpleReactLightbox>
      <Context>
        <App />
      </Context>
    </SimpleReactLightbox>
);



