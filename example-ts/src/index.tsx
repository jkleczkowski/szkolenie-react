import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { itemsReducer } from './containers/Items/ItemsReducers';
//,combineReducers, applyMiddleware

const store = createStore(itemsReducer);

//store.dispatch({ type: 'ADD_ITEM', payload: 4 });
//store.dispatch({ type: 'ADD_ITEM', payload: 5 });
//store.dispatch({ type: 'ADD_ITEM', payload: 6 });
//console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();