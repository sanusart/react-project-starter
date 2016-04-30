const CoolJsAppNode = document.getElementById('cool-js-app-node');

import React  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CoolJs from './containers/CoolJs';

import configureStore from './stores/CoolJs/index';

const store = configureStore();

Provider.displayName = 'CoolJsMainApp';

if (CoolJsAppNode) {
  ReactDOM.render(
    <Provider store={store}>
      <CoolJs />
    </Provider>,
    CoolJsAppNode
  );
}
