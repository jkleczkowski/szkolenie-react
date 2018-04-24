import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { itemsReducer } from './containers/Items/ItemsReducers';
import thunk from 'redux-thunk';

//const myMiddleware = (store: any) => (next: any) => (action: any) => {
//  console.group('logger');
//  console.log('dispatching', action);
//  let result = next(action);
//  console.log('next state', store.getState());
//  console.groupEnd();
//  return result;
//};

const reducers = combineReducers({ itemsReducer })
const store = createStore(reducers, applyMiddleware(thunk));

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