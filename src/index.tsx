import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './components/common/App';
import './index.scss';
import store from './store/Store'

ReactDOM.render(
  <Provider store={store}>
     < App />
  </Provider> ,
  document.getElementById('root') as HTMLElement,
);
