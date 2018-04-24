import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {  createStore } from 'redux';
//,combineReducers, applyMiddleware
function itemsReducer(state = {}, action: any): any {
  switch (action.type) {
    case 'TEST':
      debugger;
      return { ...state };
      //break;

    default:
      return state;
      //break;
  }
}
const store = createStore(itemsReducer);

store.dispatch({ type: 'TEST' });


ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();