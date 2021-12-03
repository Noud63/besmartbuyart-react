import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Context } from './Context'
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <SimpleReactLightbox>
      <Context>
        <App />
      </Context>
    </SimpleReactLightbox>,
  document.getElementById('root')
);

