/*
|--------------------------------------------------------------------------
| React and Router
|--------------------------------------------------------------------------
*/

import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import Root from './Root';
import Router from './Router';
import store from './store/store';
import i18n from './lib/i18n';

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'react-rangeslider/lib/index.css';
import './styles/main.module.css';

/*
|--------------------------------------------------------------------------
| Render the app
|--------------------------------------------------------------------------
*/

i18n
  .init()
  .then(() => {
    ReactDOM.render(
      <Root>
        <ReduxProvider store={store}>
          <I18nextProvider i18n={i18n}>
            <Router />
          </I18nextProvider>
        </ReduxProvider>
      </Root>,
      document.getElementById('wrap')
    );
  })
  .catch((err) => {
    throw new Error(`Failed to initialize i18next:\n${err}`);
  });
