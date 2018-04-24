import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
//,combineReducers, applyMiddleware
function itemsReducer(state = { data: [1, 2, 3] }, action: any): any {
  switch (action.type) {
    case 'ADD_ITEM':
      //debugger;
      return { ...state, data: [...state.data, action.payload] };
    //break;

    default:
      return state;
    //break;
  }
}
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