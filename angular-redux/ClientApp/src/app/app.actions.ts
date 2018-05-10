import { ActionCreator, Action } from "redux";
export interface AppAction extends Action {
    payload?: any;
}
export enum actions {
    CNT_INCREMENT = '[Counter] Increment',
    CNT_DECREMENT = '[Counter] Decrement',
    CNT_INCREMENT_BY = '[Counter] Increment by',
    CNT_DECREMENT_BY = '[Counter] Increment by'
}

export const increment: ActionCreator<Action> = () => ({
    type: actions.CNT_INCREMENT
});
export const incrementBy: ActionCreator<Action> = (by: number) => ({
    type: actions.CNT_INCREMENT_BY, payload: by
});
export const decrement: ActionCreator<Action> = () => ({
    type: actions.CNT_DECREMENT
});
export const decrementBy: ActionCreator<Action> = (by: number) => ({
    type: actions.CNT_DECREMENT_BY, payload: by
});