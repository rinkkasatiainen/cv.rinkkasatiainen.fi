import React from 'react';
import ReactDOM from 'react-dom';
import { AppCreator as CV} from './CV';
import './index.css';

import { Provider } from 'react-redux';
import store, { action } from './store';

const app = <Provider store={store} action={action}>
  <CV >
  </CV>
  </Provider>

ReactDOM.render(
  app,
  document.getElementById('root')
);
