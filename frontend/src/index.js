import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import {createStore} from 'redux';
import reducer from './reducers/index';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
let store = createStore(reducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
