import {
    Action,
    ActionCreator,
    Reducer,
    StoreEnhancer,
    createStore,
    compose,
    Store
} from 'redux';
import { actions, AppAction } from './app.actions';
import { InjectionToken } from '@angular/core';


export interface IAppState {
    counter?: number
}

const initialState: IAppState = { counter: 0 };

export const reducer: Reducer<IAppState> = (state: IAppState = initialState, action: AppAction): IAppState => {
    switch (action.type) {
        case actions.CNT_INCREMENT:
            return Object.assign({}, state, { counter: state.counter + 1 });
        case actions.CNT_DECREMENT:
            return Object.assign({}, state, { counter: state.counter - 1 });
        case actions.CNT_INCREMENT_BY:
            return Object.assign({}, state, { counter: state.counter + (action.payload | 0) as number });
        case actions.CNT_DECREMENT_BY:
            return Object.assign({}, state, { counter: state.counter - (action.payload | 0) as number });
        default:
            return state;

    }
}


const devtools: StoreEnhancer<IAppState> =
    window['devToolsExtension'] ?
        window['devToolsExtension']() : f => f;


export function createAppStore(): Store<IAppState> {
    console.log('creating appStore')
    return createStore(
        reducer,
        compose(devtools)
    );
}
export const AppStore = new InjectionToken('App.store');

export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
];