import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import { AppCreator as CV } from './CV';
import './index.css';
import store, { action } from './store';

const app = (<Provider store={store} action={action}>
  <CV />
</Provider>);

ReactDOM.render(
  app,
  document.getElementById('cv-root'),
);
