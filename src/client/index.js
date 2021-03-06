/* @flow */
import 'babel-core/register';
import 'babel-polyfill';

import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../common/components/Routes';
import RootStore from '../common/stores/RootStore';
import '../common/style/index.scss';

declare var window: {
  __INITIAL_STATE__: Object,
  location: {
    pathname: string
  }
};

const rootStore = new RootStore(window.__INITIAL_STATE__);
const element = document.getElementById('root');
 
if (element) {
  hydrate(
    <Provider rootStore={rootStore}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>,
    element
  );
}